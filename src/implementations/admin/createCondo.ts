import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import * as pb from "../../protos/out/admin/admin_pb";
import Condo from "../../models/condo";

const createCondo = async (
    call: ServerUnaryCall<pb.CreateCondoRequest, pb.CreateCondoResponse>,
    callback: sendUnaryData<pb.CreateCondoResponse>
) => {
    const req = call.request;
    console.log(req.toObject())
    const condo = new Condo({
        address: req.getAddress(),
        name: req.getName(),
        office_hours: req.toObject().officeHoursList,
        phone_number: req.getPhoneNumber(),
        email: req.getEmail(),
        owner: req.getOwner(),
    });
    const savedCondo = await condo.save()
    const response = new pb.CreateCondoResponse();
    const respCondo = new pb.Condo()
    respCondo.setId(savedCondo._id)
    respCondo.setAddress(savedCondo.address)
    respCondo.setName(savedCondo.name)
    const respOfficeHours: pb.OfficeHour[] = []
    savedCondo.office_hours.forEach(oh => {
        const officeHr = new pb.OfficeHour()
        officeHr.setDay(oh.day)
        officeHr.setFrom(oh.from)
        officeHr.setTo(oh.to)
        respOfficeHours.push(officeHr)
    })
    respCondo.setOfficeHoursList(respOfficeHours)
    respCondo.setPhoneNumber(savedCondo.phone_number)
    respCondo.setEmail(savedCondo.email)
    respCondo.setOwner(savedCondo.owner)
    response.setCondo(respCondo)
    callback(null, response)
};

export default createCondo