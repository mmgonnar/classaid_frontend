import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);

const classNameValidationSchema = {
  name: yup.string().min(2, 'Name must be at least 2 characters.').max(25).required(),
  // .matches(/[a-zA-Z ]/, 'Name can only contain letters.'),
};

const classDescriptionValidationSchema = {
  description: yup.string().max(200).required(),
};
const classTeacherValidationSchema = {
  teacher: yup.string().max(200).required(),
};

export const baseClassSchema = yup.object({
  ...classNameValidationSchema,
  ...classDescriptionValidationSchema,
  ...classTeacherValidationSchema,
});

//validation frontend
export const classValidationFront = baseClassSchema;
