// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var events_events_pb = require('../events/events_pb.js');
var chat_chat_pb = require('../chat/chat_pb.js');

function serialize_Empty(arg) {
  if (!(arg instanceof chat_chat_pb.Empty)) {
    throw new Error('Expected argument of type Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Empty(buffer_arg) {
  return chat_chat_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Event(arg) {
  if (!(arg instanceof events_events_pb.Event)) {
    throw new Error('Expected argument of type Event');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Event(buffer_arg) {
  return events_events_pb.Event.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SubscribeToEventsRequest(arg) {
  if (!(arg instanceof events_events_pb.SubscribeToEventsRequest)) {
    throw new Error('Expected argument of type SubscribeToEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SubscribeToEventsRequest(buffer_arg) {
  return events_events_pb.SubscribeToEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UnsubscribeFromEventsRequest(arg) {
  if (!(arg instanceof events_events_pb.UnsubscribeFromEventsRequest)) {
    throw new Error('Expected argument of type UnsubscribeFromEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UnsubscribeFromEventsRequest(buffer_arg) {
  return events_events_pb.UnsubscribeFromEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var EventsServiceService = exports.EventsServiceService = {
  subscribeToEvents: {
    path: '/EventsService/SubscribeToEvents',
    requestStream: false,
    responseStream: true,
    requestType: events_events_pb.SubscribeToEventsRequest,
    responseType: events_events_pb.Event,
    requestSerialize: serialize_SubscribeToEventsRequest,
    requestDeserialize: deserialize_SubscribeToEventsRequest,
    responseSerialize: serialize_Event,
    responseDeserialize: deserialize_Event,
  },
  unsubscribeFromEvents: {
    path: '/EventsService/UnsubscribeFromEvents',
    requestStream: false,
    responseStream: false,
    requestType: events_events_pb.UnsubscribeFromEventsRequest,
    responseType: chat_chat_pb.Empty,
    requestSerialize: serialize_UnsubscribeFromEventsRequest,
    requestDeserialize: deserialize_UnsubscribeFromEventsRequest,
    responseSerialize: serialize_Empty,
    responseDeserialize: deserialize_Empty,
  },
};

exports.EventsServiceClient = grpc.makeGenericClientConstructor(EventsServiceService);
