import * as yup from 'yup';
import YupPassword from 'yup-password';
import { emailPattern } from '@/utils/constants';
YupPassword(yup);

const name = yup
  .string()
  .min(2, 'Name must be at least 2 characters.')
  .max(25)
  .matches(/[a-zA-Z ]/, 'Name can only contain letters.')
  .optional();

const lastName = yup
  .string()
  .default('') // Asegura que undefined/null se conviertan en ""
  .notRequired() // Explícitamente opcional
  .test(
    'length-if-not-empty',
    'Last name must be 2-30 characters',
    (value) => value === '' || (value.length >= 2 && value.length <= 30),
  );

const email = yup
  .string('Please include an "@" in the address')
  .email('Enter valid email')
  .matches(emailPattern, 'Please enter a valid email address. eg name@mail.com')
  // .password()
  .optional();

const password = yup
  .string()
  .min(4, 'Passwords must be four or more characters')
  .required('Password is a required field');

//* Basic validation
const required = {
  name: name.required(),
  email: email.required('Email is required'),
  password: password.required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
};
const optional = {
  name: name.optional(),
  lastName: lastName.optional(),
  email: email.optional(),
};

export const loginUserValidationSchema = yup.object().shape({
  email: required.email,
  password: required.password,
});

export const registerUserValidationSchema = yup.object().shape({
  ...required,
  lastName: optional.lastName,
});
export const updateUserValidationSchema = yup.object().shape(optional);

export const validationUpdateUser = yup.object().shape({
  name: optional.name,
  lastName: optional.lastName,
  email: optional.email,
});
export const frontUserValidationSchema = registerUserValidationSchema;

export const backUserValidationSchema = yup.object().shape({
  ...required,
  lastName: optional.lastName,
});

//!!!!!!!!!!!--------------!--------------!--------------!--------------

// const nameValidationSchema = {
//   name: yup
//     .string()
//     .min(2, 'Name must be at least 2 characters.')
//     .max(25)
//     .required()
//     .matches(/[a-zA-Z ]/, 'Name can only contain letters.'),
// };

// const lastNameValidationSchema = {
//   lastName: yup
//     .string()
//     .default('')
//     // .min(2, 'Last name must be at least 2 characters')
//     // .max(30, 'Last name cannot exceed 30 characters')
//     .notRequired(),
// };

// const emailValidation = {
//   email: yup
//     .string('Please include an "@" in the address')
//     .email('Enter valid email')
//     .matches(emailPattern, 'Please enter a valid email address. eg name@mail.com')
//     .required('Email is a required field'),
// };

// const passwordValidationSchema = {
//   password: yup
//     .string()
//     // .password()
//     .min(4, 'Passwords must be four or more characters')
//     .required('Password is a required field'),
// };
// const confirmPasswordValidation = {
//   confirmPassword: yup
//     .string()
//     .required('Confirm password is required')
//     .oneOf([yup.ref('password')], 'Passwords must match'),
// };

// export const updateUser = yup.object({
//   ...nameValidationSchema,
//   ...lastNameValidationSchema,
//   ...emailValidation,
// });

// export const baseValidationSchema = yup.object({
//   ...nameValidationSchema,
//   ...lastNameValidationSchema,
//   ...emailValidation,
// });

//validation backend
//export const validationBack = baseValidationSchema;
//validation frontend
// export const validationFront = baseValidationSchema.shape({
//   ...confirmPasswordValidation,
//   ...passwordValidationSchema,
// });

// const baseFields = {
//   name: nameValidation,
//   lastName: lastNameValidation,
//   email: emailValidationB,
// };

// const baseUserValidation = yup.object().shape({
//   name: nameValidation.optional(),
//   lastName: lastNameValidation.optional(),
//   email: emailValidationB.optional(),
// });

// const basicUserValidationRequired = yup.object().shape({
//   name: nameValidation.required(),
//   lastName: lastNameValidation.optional(),
//   email: emailValidationB.required('Email is required'),
// });

// export const registerUserValidationSchema = yup.object().shape({
//   name: nameValidation.required(),
//   lastName: lastNameValidation.optional(),
//   email: emailValidationB.required(),
//   password: passwordValidation.required('Password is required'),
//   confirmPassword: confirmPasswordValidation.required('Confirm password is required'),
// });

// export const loginUserValidationSchema = yup.object().shape({
//   email: emailValidationB.email.required('Email is required'),
//   password: passwordValidation.password.required('Password is required'),
// });

// export const updateUserValidationSchema = baseUserValidation;

// export const backUserValidationSchema = basicUserValidationRequired;

// export const validationUpdateUser = yup.object({
//   name: yup
//     .string()
//     .min(2, 'Name must be at least 2 characters.')
//     .max(25)
//     .notRequired()
//     .matches(/[a-zA-Z ]/, 'Name can only contain letters.'),
//   lastName: yup.string().default('').notRequired(),
//   email: yup
//     .string('Please include an "@" in the address')
//     .email('Enter valid email')
//     .matches(emailPattern, 'Please enter a valid email address. eg name@mail.com')
//     .notRequired(),
// });

// Validation UPDATE USER

// export const classValidationSchema = yup.object().shape({
//   ...nameValidationSchema,
//   description: yup.string().max(200, 'Description cannot exceed 200 characters.').notRequired(),
// });

// export const loginValidationSchema = yup.object({
//   ...emailValidation,
//   ...passwordValidationSchema,
// });
