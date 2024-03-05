import { CreateAccessCodeRequest, CreateAccessCodeResponse } from '../../protos/out/admin/admin_pb';
import {
    ServerUnaryCall,
    sendUnaryData,
} from '@grpc/grpc-js';
import CondoAccessCode from '../../models/condoAccessCode';

const createAccessCode = (
    call: ServerUnaryCall<CreateAccessCodeRequest, CreateAccessCodeResponse>,
    callback: sendUnaryData<CreateAccessCodeResponse>
) => {
    const condoId = call.request.getCondoId();

    const accessCode = Math.random().toString(36).substring(2, 8);

    const newCode = new CondoAccessCode({
        condo_id: condoId,
        code: accessCode,
    });
    
    newCode.save()
        .then((savedCondoCode) => {
            console.log('Condo access code saved:', savedCondoCode);
        })
        .catch((error) => {
            console.error('Error saving condo access code:', error);
        });

    let response = new CreateAccessCodeResponse();
    response.setAccessCode(accessCode);

    callback(null, response);
};

export default createAccessCode;