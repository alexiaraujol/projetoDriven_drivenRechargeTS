import Joi from 'joi';


const phonesSchema = Joi.object({
  number: Joi.string().required(),
  client_id: Joi.number().required(),
  description: Joi.string().required(),
  carrier_id: Joi.number().required(),
  name: Joi.string().optional(),
  document: Joi.string().optional()
});

export default phonesSchema; 
