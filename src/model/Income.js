const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

//create income schema
const incomeSchema = new mongoose.Schema(
  {
    title: {
      required: [true, "Title is required"],
      type: String,
    },
    description: {
      required: [true, "Description is required"],
      type: String,
    },

    type: {
      type: String,
      default:"income"
    },

    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,//must be mongodb id
        ref:"User",
        required: [true, "User ID is required"]
    }
    },
      {
        timestamps: true,

        toJSON: {
          virtuals: true,
        },

        toObject: {
          virtuals: true,
        }
      }
    );


    incomeSchema.plugin(mongoosePaginate);
const Income=mongoose.model('Income',incomeSchema);
module.exports = Income;