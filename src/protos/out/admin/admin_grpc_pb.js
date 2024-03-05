// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var admin_admin_pb = require('../admin/admin_pb.js');

function serialize_admin_CreateAccessCodeRequest(arg) {
  if (!(arg instanceof admin_admin_pb.CreateAccessCodeRequest)) {
    throw new Error('Expected argument of type admin.CreateAccessCodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_admin_CreateAccessCodeRequest(buffer_arg) {
  return admin_admin_pb.CreateAccessCodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_admin_CreateAccessCodeResponse(arg) {
  if (!(arg instanceof admin_admin_pb.CreateAccessCodeResponse)) {
    throw new Error('Expected argument of type admin.CreateAccessCodeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_admin_CreateAccessCodeResponse(buffer_arg) {
  return admin_admin_pb.CreateAccessCodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_admin_CreateCondoRequest(arg) {
  if (!(arg instanceof admin_admin_pb.CreateCondoRequest)) {
    throw new Error('Expected argument of type admin.CreateCondoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_admin_CreateCondoRequest(buffer_arg) {
  return admin_admin_pb.CreateCondoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_admin_CreateCondoResponse(arg) {
  if (!(arg instanceof admin_admin_pb.CreateCondoResponse)) {
    throw new Error('Expected argument of type admin.CreateCondoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_admin_CreateCondoResponse(buffer_arg) {
  return admin_admin_pb.CreateCondoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AdminServiceService = exports.AdminServiceService = {
  createCondo: {
    path: '/admin.AdminService/CreateCondo',
    requestStream: false,
    responseStream: false,
    requestType: admin_admin_pb.CreateCondoRequest,
    responseType: admin_admin_pb.CreateCondoResponse,
    requestSerialize: serialize_admin_CreateCondoRequest,
    requestDeserialize: deserialize_admin_CreateCondoRequest,
    responseSerialize: serialize_admin_CreateCondoResponse,
    responseDeserialize: deserialize_admin_CreateCondoResponse,
  },
  createAccessCode: {
    path: '/admin.AdminService/CreateAccessCode',
    requestStream: false,
    responseStream: false,
    requestType: admin_admin_pb.CreateAccessCodeRequest,
    responseType: admin_admin_pb.CreateAccessCodeResponse,
    requestSerialize: serialize_admin_CreateAccessCodeRequest,
    requestDeserialize: deserialize_admin_CreateAccessCodeRequest,
    responseSerialize: serialize_admin_CreateAccessCodeResponse,
    responseDeserialize: deserialize_admin_CreateAccessCodeResponse,
  },
};

exports.AdminServiceClient = grpc.makeGenericClientConstructor(AdminServiceService);
