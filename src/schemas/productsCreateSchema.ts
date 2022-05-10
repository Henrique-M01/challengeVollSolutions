import * as Joi from 'joi';

const productsCreateSchema = Joi.object({
  name: Joi.string().min(3).required(),
  description: Joi.string().min(6).required(),
  quantity: Joi.number().required(),
});

export default productsCreateSchema;
