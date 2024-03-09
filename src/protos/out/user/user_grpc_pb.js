// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_user_pb = require('../user/user_pb.js');

function serialize_CreateUserRequest(arg) {
  if (!(arg instanceof user_user_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateUserRequest(buffer_arg) {
  return user_user_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FindChatMateRequest(arg) {
  if (!(arg instanceof user_user_pb.FindChatMateRequest)) {
    throw new Error('Expected argument of type FindChatMateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_FindChatMateRequest(buffer_arg) {
  return user_user_pb.FindChatMateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetUserRequest(arg) {
  if (!(arg instanceof user_user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetUserRequest(buffer_arg) {
  return user_user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_LoginUserRequest(arg) {
  if (!(arg instanceof user_user_pb.LoginUserRequest)) {
    throw new Error('Expected argument of type LoginUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_LoginUserRequest(buffer_arg) {
  return user_user_pb.LoginUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateUserRequest(arg) {
  if (!(arg instanceof user_user_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateUserRequest(buffer_arg) {
  return user_user_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_User(arg) {
  if (!(arg instanceof user_user_pb.User)) {
    throw new Error('Expected argument of type User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_User(buffer_arg) {
  return user_user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  createUser: {
    path: '/UserService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_user_pb.CreateUserRequest,
    responseType: user_user_pb.User,
    requestSerialize: serialize_CreateUserRequest,
    requestDeserialize: deserialize_CreateUserRequest,
    responseSerialize: serialize_User,
    responseDeserialize: deserialize_User,
  },
  loginUser: {
    path: '/UserService/LoginUser',
    requestStream: false,
    responseStream: false,
    requestType: user_user_pb.LoginUserRequest,
    responseType: user_user_pb.User,
    requestSerialize: serialize_LoginUserRequest,
    requestDeserialize: deserialize_LoginUserRequest,
    responseSerialize: serialize_User,
    responseDeserialize: deserialize_User,
  },
  updateUser: {
    path: '/UserService/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_user_pb.UpdateUserRequest,
    responseType: user_user_pb.User,
    requestSerialize: serialize_UpdateUserRequest,
    requestDeserialize: deserialize_UpdateUserRequest,
    responseSerialize: serialize_User,
    responseDeserialize: deserialize_User,
  },
  getUser: {
    path: '/UserService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: user_user_pb.GetUserRequest,
    responseType: user_user_pb.User,
    requestSerialize: serialize_GetUserRequest,
    requestDeserialize: deserialize_GetUserRequest,
    responseSerialize: serialize_User,
    responseDeserialize: deserialize_User,
  },
  findChatMate: {
    path: '/UserService/FindChatMate',
    requestStream: false,
    responseStream: false,
    requestType: user_user_pb.FindChatMateRequest,
    responseType: user_user_pb.User,
    requestSerialize: serialize_FindChatMateRequest,
    requestDeserialize: deserialize_FindChatMateRequest,
    responseSerialize: serialize_User,
    responseDeserialize: deserialize_User,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
