const {Schema, model} = require("mongoose");

const UserSchema = new Schema(
  {
    gender: {type: String, required: true, enum: ["male", "female"]},
    name: {
      title: String,
      first: String,
      last: String,
    },
    location: {
      street: {
        number: Number,
        name: String,
      },
      city: String,
      state: String,
      country: String,
      postcode: Schema.Types.Mixed,
      coordinates: {
        latitude: String,
        longitude: String,
      },
      timezone: {
        offset: String,
        description: String,
      },
    },
    email: String,
    login: {
      uuid: String,
      username: String,
      password: String,
      salt: String,
      md5: String,
      sha1: String,
      sha256: String,
    },
    dob: {
      date: String,
      age: Number,
    },
    registered: {
      date: String,
      age: Number,
    },
    phone: String,
    cell: String,
    id: {
      name: String,
      value: String,
    },
    picture: {
      large: String,
      medium: String,
      thumbnail: String,
    },
    nat: String,
  },
  {
    id: false,
    versionKey: false,
  }
);

const UserModel = model("conitab", UserSchema);

module.exports = UserModel;
