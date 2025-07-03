import * as yup from 'yup';

const classNameValidationSchema = {
  name: yup.string().min(2, 'Name must be at least 2 characters.').max(25).required(),
};

const classDescriptionValidationSchema = {
  description: yup.string().max(500).required('Description is a required field'),
};
const classTeacherValidationSchema = {
  teacher: yup.string().max(1000).required(),
};

const classGroupValidationSchema = {
  group: yup.string().max(10),
};

const classFavoriteValidationSchema = {
  favorite: yup.boolean(false),
};

export const baseClassSchema = yup.object({
  ...classNameValidationSchema,
  ...classDescriptionValidationSchema,
  // ...classTeacherValidationSchema,
  ...classGroupValidationSchema,
});

//validation frontend
export const classValidationFront = baseClassSchema;
