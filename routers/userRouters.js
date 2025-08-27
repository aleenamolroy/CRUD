import { Router } from "express";
import { addUser } from "../controllers/userControllers.js";
import { getusers } from "../controllers/userControllers.js";
import { UpdateUser } from "../controllers/userControllers.js";
import { DeleteUser } from "../controllers/userControllers.js";

const router=Router()
router.get('/users',getusers)
router.get('/addusers',addUser)
router.put('/users/:id',UpdateUser)
router.delete('/users/:id',DeleteUser)

export default router