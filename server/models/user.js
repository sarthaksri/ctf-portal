const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  teamname:{
    type : String,
    required : true
  },
  email: {
    type: String,
    required : true,
    unique:true,
  },
  password: {
    type: String,
    required: true,
  },
  game:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'game'
  },
  image:{
    type:String,
  }
});

module.exports= mongoose.model("User",UserSchema);