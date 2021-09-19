import { Router } from "express";
import { blockPostCreateAction } from "../controller/blockPostCreateAction";
import { verifyToken } from "../middleware/jwt";

export const router = Router();

router.post("/", verifyToken, (request, response) => {
  blockPostCreateAction(request, response);
});
