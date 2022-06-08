const express = require("express");
const {createIncCtrl , fetchAllIncCtrl,fetchIncDetailsCtrl,updateIncCtrl,deleteIncCtrl}= require("../../controllers/income/incomeCtrl");
const authMiddleware = require('../../middlewares/authMiddleware');



const incomeRoute = express.Router();

incomeRoute.post("/",createIncCtrl);
incomeRoute.get('/',authMiddleware,fetchAllIncCtrl);
incomeRoute.get('/:id',fetchIncDetailsCtrl);
incomeRoute.put("/:id",updateIncCtrl);
incomeRoute.delete("/:id",deleteIncCtrl);


module.exports = incomeRoute;