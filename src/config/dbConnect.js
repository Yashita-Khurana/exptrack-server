// require the library
const mongoose = require('mongoose');



//lprArypKGVp4DN0c

//mongodb+srv://Yashita:<password>@cluster0.mn1pf.mongodb.net/?retryWrites=true&w=majority


const dbConnect = async () => {
    try {
        //connect to the database
      await mongoose.connect(process.env.MONGO_URL, {
        // useCreateIndex: true,
        // useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      console.log("Db is Connected Successfully");
    } catch (error) {
      console.log(`Error ${error.message}`);
    }
  };

  
  module.exports = dbConnect;
