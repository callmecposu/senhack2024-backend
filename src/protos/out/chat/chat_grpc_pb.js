// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var chat_chat_pb = require('../chat/chat_pb.js');

function serialize_chat_Message(arg) {
  if (!(arg instanceof chat_chat_pb.Message)) {
    throw new Error('Expected argument of type chat.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_Message(buffer_arg) {
  return chat_chat_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_SendMessageResponse(arg) {
  if (!(arg instanceof chat_chat_pb.SendMessageResponse)) {
    throw new Error('Expected argument of type chat.SendMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_SendMessageResponse(buffer_arg) {
  return chat_chat_pb.SendMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_SubscribeToChatRequest(arg) {
  if (!(arg instanceof chat_chat_pb.SubscribeToChatRequest)) {
    throw new Error('Expected argument of type chat.SubscribeToChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_SubscribeToChatRequest(buffer_arg) {
  return chat_chat_pb.SubscribeToChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_UnsubscribeFromChatRequest(arg) {
  if (!(arg instanceof chat_chat_pb.UnsubscribeFromChatRequest)) {
    throw new Error('Expected argument of type chat.UnsubscribeFromChatRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_UnsubscribeFromChatRequest(buffer_arg) {
  return chat_chat_pb.UnsubscribeFromChatRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chat_UnsubscribeFromChatResponse(arg) {
  if (!(arg instanceof chat_chat_pb.UnsubscribeFromChatResponse)) {
    throw new Error('Expected argument of type chat.UnsubscribeFromChatResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_UnsubscribeFromChatResponse(buffer_arg) {
  return chat_chat_pb.UnsubscribeFromChatResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatServiceService = exports.ChatServiceService = {
  subscribeToChat: {
    path: '/chat.ChatService/SubscribeToChat',
    requestStream: false,
    responseStream: true,
    requestType: chat_chat_pb.SubscribeToChatRequest,
    responseType: chat_chat_pb.Message,
    requestSerialize: serialize_chat_SubscribeToChatRequest,
    requestDeserialize: deserialize_chat_SubscribeToChatRequest,
    responseSerialize: serialize_chat_Message,
    responseDeserialize: deserialize_chat_Message,
  },
  sendMessage: {
    path: '/chat.ChatService/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: chat_chat_pb.Message,
    responseType: chat_chat_pb.SendMessageResponse,
    requestSerialize: serialize_chat_Message,
    requestDeserialize: deserialize_chat_Message,
    responseSerialize: serialize_chat_SendMessageResponse,
    responseDeserialize: deserialize_chat_SendMessageResponse,
  },
  unsubscribeFromChat: {
    path: '/chat.ChatService/UnsubscribeFromChat',
    requestStream: false,
    responseStream: false,
    requestType: chat_chat_pb.UnsubscribeFromChatRequest,
    responseType: chat_chat_pb.UnsubscribeFromChatResponse,
    requestSerialize: serialize_chat_UnsubscribeFromChatRequest,
    requestDeserialize: deserialize_chat_UnsubscribeFromChatRequest,
    responseSerialize: serialize_chat_UnsubscribeFromChatResponse,
    responseDeserialize: deserialize_chat_UnsubscribeFromChatResponse,
  },
};

exports.ChatServiceClient = grpc.makeGenericClientConstructor(ChatServiceService);
