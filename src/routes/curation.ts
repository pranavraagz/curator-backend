import { Router } from "express";
import { verifyToken } from "../middleware/jwt";
import { curationDeleteAction } from "../controller/curationDeleteAction";
import { curationPostCreateAction } from "../controller/curationPostCreateAction";
import { curationPutUpdateAction } from "../controller/curationPutUpdateAction";

export const router = Router();

router.post("/", verifyToken, (request, response) => {
  curationPostCreateAction(request, response);
});

router.put("/", verifyToken, (request, response) => {
  curationPutUpdateAction(request, response);
});

router.delete("/", verifyToken, (request, response) => {
  curationDeleteAction(request, response);
});
