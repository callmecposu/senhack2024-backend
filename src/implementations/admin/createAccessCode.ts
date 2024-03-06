import {
    CreateAccessCodeRequest,
    CreateAccessCodeResponse,
} from "../../protos/out/admin/admin_pb";
import { ServerUnaryCall, sendUnaryData, status } from "@grpc/grpc-js";
import CondoAccessCode from "../../models/condoAccessCode";
import Condo from "../../models/condo";

const createAccessCode = async (
    call: ServerUnaryCall<CreateAccessCodeRequest, CreateAccessCodeResponse>,
    callback: sendUnaryData<CreateAccessCodeResponse>
) => {
    const req = call.request;
    try{
    // if condo id is invalid, return an error
    const condoWithGivenId = await Condo.find({ _id: req.getCondoId() });
    if (!condoWithGivenId) {
        callback({
            code: status.INVALID_ARGUMENT,
            message: `Condo with id \'${req.getCondoId()}\' does not exist!`,
        });
        return
    }
    // generate a random access code
    const accessCode = Math.random().toString(36).substring(2, 8);
    const newCode = new CondoAccessCode({
        condo_id: req.getCondoId(),
        code: accessCode,
    });
    newCode
        .save()
        .then((savedCondoCode) => {
            console.log("Condo access code saved:", savedCondoCode);
        })
        .catch((error) => {
            console.error("Error saving condo access code:", error);
        });

    let response = new CreateAccessCodeResponse();
    response.setAccessCode(accessCode);

    callback(null, response);
    } catch (err: any){
        callback({code: status.INTERNAL, message: err.message})
    }
};

export default createAccessCode;
