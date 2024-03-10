import * as grpc from "@grpc/grpc-js";
import mongoose from "mongoose";
import { UserServiceService } from "./protos/out/user/user_grpc_pb";
// import { AuthServiceService } from "./protos/out/auth/auth_grpc_pb";
// import { AdminServiceService } from "./protos/out/admin/admin_grpc_pb";
// import createCondo from "./implementations/admin/createCondo";
// import createAccessCode from "./implementations/admin/createAccessCode";
// import createUser from "./implementations/auth/createUser";
// import loginUser from "./implementations/auth/loginUser";
// import subscribeToChat from "./implementations/chat/subscribeToChat";
// import sendMessage from "./implementations/chat/sendMessage";
// import unsubscribeFromChat from "./implementations/chat/unsubscribeFromChat";
// import { ChatServiceService } from "./protos/out/chat/chat_grpc_pb";
import updateUser from "./implementations/user/updateUser";
import createUser from './implementations/user/createUser'
import loginUser from './implementations/user/loginUser'
import { EventsServiceService } from "./protos/out/events/events_grpc_pb";
import subscribeToEvents from './implementations/events/subscribeToEvents'
import unsubscribeFromEvents from './implementations/events/unsubscribeFromEvents'
import { ChatServiceService } from "./protos/out/chat/chat_grpc_pb";
import createChat from './implementations/chat/createChat'
import sendMessage from './implementations/chat/sendMessage'
require("dotenv").config();

mongoose
    .connect(process.env.MONGODB as string)
    .then(() => {
        console.log("Connected to the DB!");
        const server = new grpc.Server();
        // server.addService(AdminServiceService, {
        //     createCondo,
        //     createAccessCode,
        // });
        // server.addService(AuthServiceService, { createUser, loginUser });
        // server.addService(ChatServiceService, {
        //     subscribeToChat,
        //     sendMessage,
        //     unsubscribeFromChat,
        // });
        server.addService(UserServiceService, {createUser, loginUser, updateUser})
        server.addService(EventsServiceService, {subscribeToEvents, unsubscribeFromEvents})
        server.addService(ChatServiceService, {createChat, sendMessage})
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
