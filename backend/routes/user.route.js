import express from "express";
import {getUsersForSideBar }from "../controllers/getUsersForSideBar.js";
import protectRoute from "../middleware/protectRoute.js";

const route=express.Router();


route.get('/',protectRoute,getUsersForSideBar)


export default route;