// const expressAsyncHandler = require('express-async-handler');

// const jwt = require('jsonwebtoken');
// const User = require('../model/User');


// const authMiddleware = expressAsyncHandler(async(req,res,next) => {
//     let token;
//     if(req?.headers?.authorization?.startsWith('Bearer'))
//     {
//         token = req?.headers?.authorization?.split(" ")[1];
//         console.log(token);
//         try{
//             if(token)
//             {
//                 const decodeUser = jwt.verify(token, process.env.JWT_KEY);
//                 console.log(decodeUser);
//                 next();
//             }
//         }
//         catch(error)
//         {
//             throw new Error("Not authorized token expired");
//         }
//     }
//     else 
//     {

//     }
// });

// module.exports = authMiddleware;



const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const authMiddleware = expressAsyncHandler(async (req, res, next) => {
  let token;

  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req?.headers?.authorization?.split(" ")[1];

    try 
    {
      if(token) 
      {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        console.log(decoded);
        //find the user
        const user= await User.findById(decoded?.id);
        //attach the user to the req object
        req.user = user;
        next();
      }
    }
     catch (error) {
      throw new Error("Not authorized token expired, login again");
    }
  } else{
    throw new Error("There's no token attached to the headers");
 }
});

module.exports = authMiddleware;