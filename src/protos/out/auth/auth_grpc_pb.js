// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var auth_auth_pb = require('../auth/auth_pb.js');

function serialize_auth_CreateUserRequest(arg) {
  if (!(arg instanceof auth_auth_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type auth.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_CreateUserRequest(buffer_arg) {
  return auth_auth_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_CreateUserResponse(arg) {
  if (!(arg instanceof auth_auth_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type auth.CreateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_CreateUserResponse(buffer_arg) {
  return auth_auth_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_LoginUserRequest(arg) {
  if (!(arg instanceof auth_auth_pb.LoginUserRequest)) {
    throw new Error('Expected argument of type auth.LoginUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_LoginUserRequest(buffer_arg) {
  return auth_auth_pb.LoginUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_LoginUserResponse(arg) {
  if (!(arg instanceof auth_auth_pb.LoginUserResponse)) {
    throw new Error('Expected argument of type auth.LoginUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_LoginUserResponse(buffer_arg) {
  return auth_auth_pb.LoginUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthServiceService = exports.AuthServiceService = {
  createUser: {
    path: '/auth.AuthService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: auth_auth_pb.CreateUserRequest,
    responseType: auth_auth_pb.CreateUserResponse,
    requestSerialize: serialize_auth_CreateUserRequest,
    requestDeserialize: deserialize_auth_CreateUserRequest,
    responseSerialize: serialize_auth_CreateUserResponse,
    responseDeserialize: deserialize_auth_CreateUserResponse,
  },
  loginUser: {
    path: '/auth.AuthService/LoginUser',
    requestStream: false,
    responseStream: false,
    requestType: auth_auth_pb.LoginUserRequest,
    responseType: auth_auth_pb.LoginUserResponse,
    requestSerialize: serialize_auth_LoginUserRequest,
    requestDeserialize: deserialize_auth_LoginUserRequest,
    responseSerialize: serialize_auth_LoginUserResponse,
    responseDeserialize: deserialize_auth_LoginUserResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
