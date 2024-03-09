// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_user_pb = require('../user/user_pb.js');

function serialize_user_CreateUserRequest(arg) {
  if (!(arg instanceof user_user_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type user.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_CreateUserRequest(buffer_arg) {
  return user_user_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_LoginUserRequest(arg) {
  if (!(arg instanceof user_user_pb.LoginUserRequest)) {
    throw new Error('Expected argument of type user.LoginUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_LoginUserRequest(buffer_arg) {
  return user_user_pb.LoginUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UpdateUserRequest(arg) {
  if (!(arg instanceof user_user_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type user.UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UpdateUserRequest(buffer_arg) {
  return user_user_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_User(arg) {
  if (!(arg instanceof user_user_pb.User)) {
    throw new Error('Expected argument of type user.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_User(buffer_arg) {
  return user_user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  createUser: {
    path: '/user.UserService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_user_pb.CreateUserRequest,
    responseType: user_user_pb.User,
    requestSerialize: serialize_user_CreateUserRequest,
    requestDeserialize: deserialize_user_CreateUserRequest,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
  loginUser: {
    path: '/user.UserService/LoginUser',
    requestStream: false,
    responseStream: false,
    requestType: user_user_pb.LoginUserRequest,
    responseType: user_user_pb.User,
    requestSerialize: serialize_user_LoginUserRequest,
    requestDeserialize: deserialize_user_LoginUserRequest,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
  updateUser: {
    path: '/user.UserService/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_user_pb.UpdateUserRequest,
    responseType: user_user_pb.User,
    requestSerialize: serialize_user_UpdateUserRequest,
    requestDeserialize: deserialize_user_UpdateUserRequest,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
