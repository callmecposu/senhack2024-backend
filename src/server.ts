import * as grpc from "@grpc/grpc-js";
import { AuthServiceService } from "./protos/out/auth/auth_grpc_pb";
import mongoose from "mongoose";
import { AdminServiceService } from "./protos/out/admin/admin_grpc_pb";
import createCondo from "./implementations/admin/createCondo";
import createAccessCode from "./implementations/admin/createAccessCode";
import createUser from "./implementations/auth/createUser";
import loginUser from "./implementations/auth/loginUser";
require("dotenv").config();

mongoose
    .connect(process.env.MONGODB as string)
    .then(() => {
        console.log("Connected to the DB!");
        const server = new grpc.Server();
        server.addService(AdminServiceService, {
            createCondo,
            createAccessCode,
        });
        server.addService(AuthServiceService, { createUser, loginUser });
        server.bindAsync(
            "0.0.0.0:50017",
            grpc.ServerCredentials.createInsecure(),
            () => {
                console.log("Server listening on port 50017...");
            }
        );
    })
    .catch((err) => {
        console.log("Error connecting to the database: ", err);
    });
