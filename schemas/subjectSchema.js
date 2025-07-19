import * as yup from 'yup';

const baseSubjectValidation = {
  name: yup.string().min(2, 'Name must be at least 2 characters.').max(25),
  description: yup.string().max(500),
  group: yup.string().max(10),
  favorite: yup.boolean(),
};

const createSubjectValidation = yup.object().shape({
  ...baseSubjectValidation,
  name: baseSubjectValidation.name.required(),
  description: baseSubjectValidation.description.required('Description is a required field'),
});

export const updateSubjectValidation = yup.object().shape(baseSubjectValidation);
export const subjectValidationFront = createSubjectValidation;
export const subjectValidationBack = createSubjectValidation;
