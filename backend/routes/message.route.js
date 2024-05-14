import express from "express";
import {sendMessage,getMessage }from "../controllers/sendMessage.js";
import protectRoute from "../middleware/protectRoute.js";

const route=express.Router();

route.post('/send/:id',protectRoute,sendMessage)
route.get('/:id',protectRoute,getMessage)


export default route;
