// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var chat_chat_pb = require('../chat/chat_pb.js');

function serialize_Chat(arg) {
  if (!(arg instanceof chat_chat_pb.Chat)) {
    throw new Error('Expected argument of type Chat');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Chat(buffer_arg) {
  return chat_chat_pb.Chat.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateChatRequest(arg) {
  if (!(arg instanceof chat_chat_pb.CreateChatRequest)) {
    throw new Error('Expected argument of type CreateChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateChatRequest(buffer_arg) {
  return chat_chat_pb.CreateChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DeleteChatRequest(arg) {
  if (!(arg instanceof chat_chat_pb.DeleteChatRequest)) {
    throw new Error('Expected argument of type DeleteChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DeleteChatRequest(buffer_arg) {
  return chat_chat_pb.DeleteChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Empty(arg) {
  if (!(arg instanceof chat_chat_pb.Empty)) {
    throw new Error('Expected argument of type Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Empty(buffer_arg) {
  return chat_chat_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Message(arg) {
  if (!(arg instanceof chat_chat_pb.Message)) {
    throw new Error('Expected argument of type Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Message(buffer_arg) {
  return chat_chat_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RevealIdentityRequest(arg) {
  if (!(arg instanceof chat_chat_pb.RevealIdentityRequest)) {
    throw new Error('Expected argument of type RevealIdentityRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RevealIdentityRequest(buffer_arg) {
  return chat_chat_pb.RevealIdentityRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SendMessageRequest(arg) {
  if (!(arg instanceof chat_chat_pb.SendMessageRequest)) {
    throw new Error('Expected argument of type SendMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SendMessageRequest(buffer_arg) {
  return chat_chat_pb.SendMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatServiceService = exports.ChatServiceService = {
  createChat: {
    path: '/ChatService/CreateChat',
    requestStream: false,
    responseStream: false,
    requestType: chat_chat_pb.CreateChatRequest,
    responseType: chat_chat_pb.Chat,
    requestSerialize: serialize_CreateChatRequest,
    requestDeserialize: deserialize_CreateChatRequest,
    responseSerialize: serialize_Chat,
    responseDeserialize: deserialize_Chat,
  },
  deleteChat: {
    path: '/ChatService/DeleteChat',
    requestStream: false,
    responseStream: false,
    requestType: chat_chat_pb.DeleteChatRequest,
    responseType: chat_chat_pb.Empty,
    requestSerialize: serialize_DeleteChatRequest,
    requestDeserialize: deserialize_DeleteChatRequest,
    responseSerialize: serialize_Empty,
    responseDeserialize: deserialize_Empty,
  },
  sendMessage: {
    path: '/ChatService/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: chat_chat_pb.SendMessageRequest,
    responseType: chat_chat_pb.Message,
    requestSerialize: serialize_SendMessageRequest,
    requestDeserialize: deserialize_SendMessageRequest,
    responseSerialize: serialize_Message,
    responseDeserialize: deserialize_Message,
  },
  revealIdentity: {
    path: '/ChatService/RevealIdentity',
    requestStream: false,
    responseStream: false,
    requestType: chat_chat_pb.RevealIdentityRequest,
    responseType: chat_chat_pb.Empty,
    requestSerialize: serialize_RevealIdentityRequest,
    requestDeserialize: deserialize_RevealIdentityRequest,
    responseSerialize: serialize_Empty,
    responseDeserialize: deserialize_Empty,
  },
};

exports.ChatServiceClient = grpc.makeGenericClientConstructor(ChatServiceService);
