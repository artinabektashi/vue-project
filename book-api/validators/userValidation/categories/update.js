import Joi from 'joi';

const updateCategorySchema = Joi.object({
    title: Joi.string().required().min(5).max(250),
    description: Joi.string().allow(null)
});

export default updateCategorySchema;