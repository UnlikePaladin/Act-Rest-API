import { Router } from "express";
import { getUsers, getUser, postUser, updateUser, deleteUser } from "../controllers/users.controllers.js";

const router = Router();

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.post("/user/", postUser);
router.put("/user/", updateUser);
router.delete("/user/", deleteUser);

export default router;