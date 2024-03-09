// source: events/events.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var chat_chat_pb = require('../chat/chat_pb.js');
goog.object.extend(proto, chat_chat_pb);
goog.exportSymbol('proto.DeleteChatEvent', null, global);
goog.exportSymbol('proto.Event', null, global);
goog.exportSymbol('proto.Event.EventCase', null, global);
goog.exportSymbol('proto.NewChatEvent', null, global);
goog.exportSymbol('proto.NewMessageEvent', null, global);
goog.exportSymbol('proto.SubscribeToEventsRequest', null, global);
goog.exportSymbol('proto.UnsubscribeFromEventsRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SubscribeToEventsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SubscribeToEventsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SubscribeToEventsRequest.displayName = 'proto.SubscribeToEventsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.Event.oneofGroups_);
};
goog.inherits(proto.Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Event.displayName = 'proto.Event';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NewMessageEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NewMessageEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NewMessageEvent.displayName = 'proto.NewMessageEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NewChatEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NewChatEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NewChatEvent.displayName = 'proto.NewChatEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeleteChatEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DeleteChatEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DeleteChatEvent.displayName = 'proto.DeleteChatEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UnsubscribeFromEventsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UnsubscribeFromEventsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UnsubscribeFromEventsRequest.displayName = 'proto.UnsubscribeFromEventsRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SubscribeToEventsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SubscribeToEventsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SubscribeToEventsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeToEventsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SubscribeToEventsRequest}
 */
proto.SubscribeToEventsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SubscribeToEventsRequest;
  return proto.SubscribeToEventsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SubscribeToEventsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SubscribeToEventsRequest}
 */
proto.SubscribeToEventsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SubscribeToEventsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SubscribeToEventsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SubscribeToEventsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeToEventsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.SubscribeToEventsRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.SubscribeToEventsRequest} returns this
 */
proto.SubscribeToEventsRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Event.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.Event.EventCase = {
  EVENT_NOT_SET: 0,
  NEW_MESSAGE_EVENT: 1,
  NEW_CHAT_EVENT: 2,
  DELETE_CHAT_EVENT: 3
};

/**
 * @return {proto.Event.EventCase}
 */
proto.Event.prototype.getEventCase = function() {
  return /** @type {proto.Event.EventCase} */(jspb.Message.computeOneofCase(this, proto.Event.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Event.prototype.toObject = function(opt_includeInstance) {
  return proto.Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    newMessageEvent: (f = msg.getNewMessageEvent()) && proto.NewMessageEvent.toObject(includeInstance, f),
    newChatEvent: (f = msg.getNewChatEvent()) && proto.NewChatEvent.toObject(includeInstance, f),
    deleteChatEvent: (f = msg.getDeleteChatEvent()) && proto.DeleteChatEvent.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Event}
 */
proto.Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Event;
  return proto.Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Event}
 */
proto.Event.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.NewMessageEvent;
      reader.readMessage(value,proto.NewMessageEvent.deserializeBinaryFromReader);
      msg.setNewMessageEvent(value);
      break;
    case 2:
      var value = new proto.NewChatEvent;
      reader.readMessage(value,proto.NewChatEvent.deserializeBinaryFromReader);
      msg.setNewChatEvent(value);
      break;
    case 3:
      var value = new proto.DeleteChatEvent;
      reader.readMessage(value,proto.DeleteChatEvent.deserializeBinaryFromReader);
      msg.setDeleteChatEvent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewMessageEvent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.NewMessageEvent.serializeBinaryToWriter
    );
  }
  f = message.getNewChatEvent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.NewChatEvent.serializeBinaryToWriter
    );
  }
  f = message.getDeleteChatEvent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.DeleteChatEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional NewMessageEvent new_message_event = 1;
 * @return {?proto.NewMessageEvent}
 */
proto.Event.prototype.getNewMessageEvent = function() {
  return /** @type{?proto.NewMessageEvent} */ (
    jspb.Message.getWrapperField(this, proto.NewMessageEvent, 1));
};


/**
 * @param {?proto.NewMessageEvent|undefined} value
 * @return {!proto.Event} returns this
*/
proto.Event.prototype.setNewMessageEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Event} returns this
 */
proto.Event.prototype.clearNewMessageEvent = function() {
  return this.setNewMessageEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Event.prototype.hasNewMessageEvent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional NewChatEvent new_chat_event = 2;
 * @return {?proto.NewChatEvent}
 */
proto.Event.prototype.getNewChatEvent = function() {
  return /** @type{?proto.NewChatEvent} */ (
    jspb.Message.getWrapperField(this, proto.NewChatEvent, 2));
};


/**
 * @param {?proto.NewChatEvent|undefined} value
 * @return {!proto.Event} returns this
*/
proto.Event.prototype.setNewChatEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Event} returns this
 */
proto.Event.prototype.clearNewChatEvent = function() {
  return this.setNewChatEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Event.prototype.hasNewChatEvent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DeleteChatEvent delete_chat_event = 3;
 * @return {?proto.DeleteChatEvent}
 */
proto.Event.prototype.getDeleteChatEvent = function() {
  return /** @type{?proto.DeleteChatEvent} */ (
    jspb.Message.getWrapperField(this, proto.DeleteChatEvent, 3));
};


/**
 * @param {?proto.DeleteChatEvent|undefined} value
 * @return {!proto.Event} returns this
*/
proto.Event.prototype.setDeleteChatEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.Event.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Event} returns this
 */
proto.Event.prototype.clearDeleteChatEvent = function() {
  return this.setDeleteChatEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Event.prototype.hasDeleteChatEvent = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NewMessageEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.NewMessageEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NewMessageEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NewMessageEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: (f = msg.getMessage()) && chat_chat_pb.Message.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NewMessageEvent}
 */
proto.NewMessageEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NewMessageEvent;
  return proto.NewMessageEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NewMessageEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NewMessageEvent}
 */
proto.NewMessageEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new chat_chat_pb.Message;
      reader.readMessage(value,chat_chat_pb.Message.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NewMessageEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NewMessageEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NewMessageEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NewMessageEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      chat_chat_pb.Message.serializeBinaryToWriter
    );
  }
};


/**
 * optional Message message = 1;
 * @return {?proto.Message}
 */
proto.NewMessageEvent.prototype.getMessage = function() {
  return /** @type{?proto.Message} */ (
    jspb.Message.getWrapperField(this, chat_chat_pb.Message, 1));
};


/**
 * @param {?proto.Message|undefined} value
 * @return {!proto.NewMessageEvent} returns this
*/
proto.NewMessageEvent.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.NewMessageEvent} returns this
 */
proto.NewMessageEvent.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NewMessageEvent.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NewChatEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.NewChatEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NewChatEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NewChatEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    chat: (f = msg.getChat()) && chat_chat_pb.Chat.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NewChatEvent}
 */
proto.NewChatEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NewChatEvent;
  return proto.NewChatEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NewChatEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NewChatEvent}
 */
proto.NewChatEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new chat_chat_pb.Chat;
      reader.readMessage(value,chat_chat_pb.Chat.deserializeBinaryFromReader);
      msg.setChat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NewChatEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NewChatEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NewChatEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NewChatEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      chat_chat_pb.Chat.serializeBinaryToWriter
    );
  }
};


/**
 * optional Chat chat = 1;
 * @return {?proto.Chat}
 */
proto.NewChatEvent.prototype.getChat = function() {
  return /** @type{?proto.Chat} */ (
    jspb.Message.getWrapperField(this, chat_chat_pb.Chat, 1));
};


/**
 * @param {?proto.Chat|undefined} value
 * @return {!proto.NewChatEvent} returns this
*/
proto.NewChatEvent.prototype.setChat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.NewChatEvent} returns this
 */
proto.NewChatEvent.prototype.clearChat = function() {
  return this.setChat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NewChatEvent.prototype.hasChat = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeleteChatEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.DeleteChatEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeleteChatEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeleteChatEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    chatId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeleteChatEvent}
 */
proto.DeleteChatEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeleteChatEvent;
  return proto.DeleteChatEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeleteChatEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeleteChatEvent}
 */
proto.DeleteChatEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChatId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeleteChatEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DeleteChatEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DeleteChatEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeleteChatEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChatId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string chat_id = 1;
 * @return {string}
 */
proto.DeleteChatEvent.prototype.getChatId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeleteChatEvent} returns this
 */
proto.DeleteChatEvent.prototype.setChatId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UnsubscribeFromEventsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.UnsubscribeFromEventsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UnsubscribeFromEventsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UnsubscribeFromEventsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UnsubscribeFromEventsRequest}
 */
proto.UnsubscribeFromEventsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UnsubscribeFromEventsRequest;
  return proto.UnsubscribeFromEventsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UnsubscribeFromEventsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UnsubscribeFromEventsRequest}
 */
proto.UnsubscribeFromEventsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UnsubscribeFromEventsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UnsubscribeFromEventsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UnsubscribeFromEventsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UnsubscribeFromEventsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.UnsubscribeFromEventsRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.UnsubscribeFromEventsRequest} returns this
 */
proto.UnsubscribeFromEventsRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto);
