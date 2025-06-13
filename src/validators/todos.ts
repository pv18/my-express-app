import { celebrate, Joi, Segments } from 'celebrate';

export const validateTodoBody = celebrate({
  [Segments.BODY]: {
    title: Joi.string().required().min(2),
    completed: Joi.boolean().required(),
  },
});

export const validateUpdateTodoParams = celebrate({
  [Segments.BODY]: {
    id: Joi.number().required(),
    title: Joi.string().required().min(2),
    completed: Joi.boolean().required(),
  },
});
