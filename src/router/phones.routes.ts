import { getPhones, postPhones } from "../controller/phones.controllers";
import { Router } from "express";




const phonesRouter = Router();

phonesRouter.post("/phones",postPhones);
phonesRouter.get("/:document",getPhones);

export default phonesRouter;