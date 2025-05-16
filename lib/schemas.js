import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);

console.log(yup);

export const userSchema = yup.object({
  name: yup.string().min(2).max(25).required(),
  email: yup
    .string('Please include an "@" in the address')
    .email('Email must be a valid email')
    .required(),
  password: yup.string().min(4, 'Passwords must be four or more characters').required(),
});
