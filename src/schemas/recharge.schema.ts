import Joi from "joi";
import { RecargaTel } from "protocols/types";

export const rechargeSchema = Joi.object<RecargaTel>({
  phone_id: Joi.number().integer().required(),
  amount: Joi.number().min(10).max(1000).required()
});