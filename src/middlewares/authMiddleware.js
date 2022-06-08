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
    console.log(token);

    try 
    {
      if(token) 
      {
        console.log("working");
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        console.log(decoded);
        next();
      }
    }
     catch (error) {
      throw new Error("Not authorized token expired, login again");
    }
  } 
});

module.exports = authMiddleware;