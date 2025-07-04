import { getRecharges, postRecharge } from "../controller/recharge.controllers";
import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import { rechargeSchema } from "../schemas/recharge.schema";



const rechargesRouter = Router();

rechargesRouter.post("/", postRecharge);
rechargesRouter.get("/:number", validateSchema(rechargeSchema), getRecharges);

export default rechargesRouter