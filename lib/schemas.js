import * as yup from 'yup';
import YupPassword from 'yup-password';
import { emailPattern } from '@/utils/constants';
YupPassword(yup);

const nameSchema = {
  name: yup.string().min(2, 'Name must be at least 2 characters').max(25).required(),
};

export const userSchema = yup.object().shape({
  ...nameSchema,
  email: yup
    .string('Please include an "@" in the address')
    .email('Enter valid email')
    .matches(emailPattern, 'Please enter a valid email address. eg name@mail.com')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(4, 'Passwords must be four or more characters')
    .required('Password is a required field'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});
