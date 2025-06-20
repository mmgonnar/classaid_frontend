import * as yup from 'yup';

const classNameValidationSchema = {
  name: yup.string().min(2, 'Name must be at least 2 characters.').max(25).required(),
};

const classDescriptionValidationSchema = {
  description: yup.string().max(200).required(),
};
const classTeacherValidationSchema = {
  teacher: yup.string().max(200).required(),
};

const classGroupValidationSchema = {
  group: yup.string().max(10),
};

export const baseClassSchema = yup.object({
  ...classNameValidationSchema,
  ...classDescriptionValidationSchema,
  ...classTeacherValidationSchema,
  ...classGroupValidationSchema,
});

//validation frontend
export const classValidationFront = baseClassSchema;
