const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
       name:{
        type:String,
        required:[true,"Please Enter a name"],
       },
       avatar:{
            public_id:String,
            url:String,
       },
       email:{
        type:String,
        required:[true,"Please enter a email"],
        unique:[true,"Email already exists"],
       },
       password:{
           type:String,
           required:[true,"Please enter a password"],
           minilength:[6,"Password must be at least 6 characters"],
           select:false,
       },
       posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post"
        }
       ],
       follwers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
       ],
       following:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
       ]

});

module.exports=mongoose.model("User",userSchema);