import { Router } from "express";
import { getUsers, getUser, postUser, updateUser, deleteUser, updateUserFromId } from "../controllers/users.controllers.js";

const router = Router();

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.post("/user/", postUser);
router.put("/user/", updateUser);
router.put("/user/:id", updateUserFromId);
router.delete("/user/", deleteUser);

export default router;