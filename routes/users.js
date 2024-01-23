const mongoose=require('mongoose');
const plm=require("passport-local-mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/instaClone");
const userSchema=mongoose.Schema({
  username:String,
  name:String,
  email:String,
  password:String,
  bio:String,
  profileImage:String,
  posts:[{type:mongoose.Schema.Types.ObjectId,ref:"post"}],
  //mongoose.Schema.Types.ObjectId: This indicates that each element in the posts array should be an ObjectId. ObjectId is a type used by MongoDB to uniquely identify documents in a collection.
  //This specifies that the ObjectId references documents in another collection named "post". 
})
userSchema.plugin(plm);

module.exports=mongoose.model("user",userSchema);