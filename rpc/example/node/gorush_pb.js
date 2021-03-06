/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.proto.Alert', null, global);
goog.exportSymbol('proto.proto.HealthCheckRequest', null, global);
goog.exportSymbol('proto.proto.HealthCheckResponse', null, global);
goog.exportSymbol('proto.proto.HealthCheckResponse.ServingStatus', null, global);
goog.exportSymbol('proto.proto.NotificationReply', null, global);
goog.exportSymbol('proto.proto.NotificationRequest', null, global);

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
proto.proto.Alert = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.Alert, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.Alert.displayName = 'proto.proto.Alert';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.Alert.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.Alert.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.Alert} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.Alert.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    body: jspb.Message.getFieldWithDefault(msg, 2, ""),
    subtitle: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.proto.Alert}
 */
proto.proto.Alert.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.Alert;
  return proto.proto.Alert.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.Alert} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.Alert}
 */
proto.proto.Alert.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubtitle(value);
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
proto.proto.Alert.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.Alert.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.Alert} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.Alert.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubtitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.proto.Alert.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.proto.Alert.prototype.setTitle = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string body = 2;
 * @return {string}
 */
proto.proto.Alert.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.proto.Alert.prototype.setBody = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string subtitle = 3;
 * @return {string}
 */
proto.proto.Alert.prototype.getSubtitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.proto.Alert.prototype.setSubtitle = function(value) {
  jspb.Message.setField(this, 3, value);
};



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
proto.proto.NotificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.NotificationRequest.repeatedFields_, null);
};
goog.inherits(proto.proto.NotificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.NotificationRequest.displayName = 'proto.proto.NotificationRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.NotificationRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.NotificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.NotificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.NotificationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.NotificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokensList: jspb.Message.getField(msg, 1),
    platform: jspb.Message.getFieldWithDefault(msg, 2, 0),
    message: jspb.Message.getFieldWithDefault(msg, 3, ""),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    topic: jspb.Message.getFieldWithDefault(msg, 5, ""),
    key: jspb.Message.getFieldWithDefault(msg, 6, ""),
    badge: jspb.Message.getFieldWithDefault(msg, 7, 0),
    category: jspb.Message.getFieldWithDefault(msg, 8, ""),
    alert: (f = msg.getAlert()) && proto.proto.Alert.toObject(includeInstance, f)
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
 * @return {!proto.proto.NotificationRequest}
 */
proto.proto.NotificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.NotificationRequest;
  return proto.proto.NotificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.NotificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.NotificationRequest}
 */
proto.proto.NotificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTokens(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPlatform(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBadge(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 9:
      var value = new proto.proto.Alert;
      reader.readMessage(value,proto.proto.Alert.deserializeBinaryFromReader);
      msg.setAlert(value);
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
proto.proto.NotificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.NotificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.NotificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.NotificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokensList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getPlatform();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBadge();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAlert();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.proto.Alert.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string tokens = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.proto.NotificationRequest.prototype.getTokensList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 1));
};


/** @param {!Array.<string>} value */
proto.proto.NotificationRequest.prototype.setTokensList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.proto.NotificationRequest.prototype.addTokens = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.proto.NotificationRequest.prototype.clearTokensList = function() {
  this.setTokensList([]);
};


/**
 * optional int32 platform = 2;
 * @return {number}
 */
proto.proto.NotificationRequest.prototype.getPlatform = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.NotificationRequest.prototype.setPlatform = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.proto.NotificationRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.proto.NotificationRequest.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.proto.NotificationRequest.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.proto.NotificationRequest.prototype.setTitle = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string topic = 5;
 * @return {string}
 */
proto.proto.NotificationRequest.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.proto.NotificationRequest.prototype.setTopic = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string key = 6;
 * @return {string}
 */
proto.proto.NotificationRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.proto.NotificationRequest.prototype.setKey = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional int32 badge = 7;
 * @return {number}
 */
proto.proto.NotificationRequest.prototype.getBadge = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.proto.NotificationRequest.prototype.setBadge = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional string category = 8;
 * @return {string}
 */
proto.proto.NotificationRequest.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.proto.NotificationRequest.prototype.setCategory = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional Alert alert = 9;
 * @return {?proto.proto.Alert}
 */
proto.proto.NotificationRequest.prototype.getAlert = function() {
  return /** @type{?proto.proto.Alert} */ (
    jspb.Message.getWrapperField(this, proto.proto.Alert, 9));
};


/** @param {?proto.proto.Alert|undefined} value */
proto.proto.NotificationRequest.prototype.setAlert = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.proto.NotificationRequest.prototype.clearAlert = function() {
  this.setAlert(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.proto.NotificationRequest.prototype.hasAlert = function() {
  return jspb.Message.getField(this, 9) != null;
};



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
proto.proto.NotificationReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.NotificationReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.NotificationReply.displayName = 'proto.proto.NotificationReply';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.NotificationReply.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.NotificationReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.NotificationReply} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.NotificationReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getFieldWithDefault(msg, 1, false),
    counts: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.proto.NotificationReply}
 */
proto.proto.NotificationReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.NotificationReply;
  return proto.proto.NotificationReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.NotificationReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.NotificationReply}
 */
proto.proto.NotificationReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCounts(value);
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
proto.proto.NotificationReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.NotificationReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.NotificationReply} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.NotificationReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getCounts();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.proto.NotificationReply.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.proto.NotificationReply.prototype.setSuccess = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 counts = 2;
 * @return {number}
 */
proto.proto.NotificationReply.prototype.getCounts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.proto.NotificationReply.prototype.setCounts = function(value) {
  jspb.Message.setField(this, 2, value);
};



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
proto.proto.HealthCheckRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.HealthCheckRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.HealthCheckRequest.displayName = 'proto.proto.HealthCheckRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.HealthCheckRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.HealthCheckRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.HealthCheckRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.HealthCheckRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    service: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.proto.HealthCheckRequest}
 */
proto.proto.HealthCheckRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.HealthCheckRequest;
  return proto.proto.HealthCheckRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.HealthCheckRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.HealthCheckRequest}
 */
proto.proto.HealthCheckRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setService(value);
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
proto.proto.HealthCheckRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.HealthCheckRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.HealthCheckRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.HealthCheckRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getService();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string service = 1;
 * @return {string}
 */
proto.proto.HealthCheckRequest.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.proto.HealthCheckRequest.prototype.setService = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.proto.HealthCheckResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.HealthCheckResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.HealthCheckResponse.displayName = 'proto.proto.HealthCheckResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.HealthCheckResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.HealthCheckResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.HealthCheckResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.proto.HealthCheckResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.proto.HealthCheckResponse}
 */
proto.proto.HealthCheckResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.HealthCheckResponse;
  return proto.proto.HealthCheckResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.HealthCheckResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.HealthCheckResponse}
 */
proto.proto.HealthCheckResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.proto.HealthCheckResponse.ServingStatus} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.proto.HealthCheckResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.HealthCheckResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.HealthCheckResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.proto.HealthCheckResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.proto.HealthCheckResponse.ServingStatus = {
  UNKNOWN: 0,
  SERVING: 1,
  NOT_SERVING: 2
};

/**
 * optional ServingStatus status = 1;
 * @return {!proto.proto.HealthCheckResponse.ServingStatus}
 */
proto.proto.HealthCheckResponse.prototype.getStatus = function() {
  return /** @type {!proto.proto.HealthCheckResponse.ServingStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.proto.HealthCheckResponse.ServingStatus} value */
proto.proto.HealthCheckResponse.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 1, value);
};


goog.object.extend(exports, proto.proto);
