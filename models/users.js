import mongoose from 'mongoose';
import validator from 'validator';
import { userSchema as yupUserSchema } from '../lib/schemas';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => {
        return validator.isEmail(email);
      },
      message: 'Invalid email format',
    },
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
});

userSchema.pre('save', async function (next) {
  try {
    const userData = this.toObject();
    delete userData.__v;
    delete userData._id;

    await yupUserSchema.validate(userData, { abortEarly: false });
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.pre('findOneAndUpdate', async function (next) {
  try {
    const update = this.getUpdate();
    await yupUserSchema.validate(update, { abortEarly: false });
    next();
  } catch (error) {
    next(error);
  }
});

export default mongoose.models.User || mongoose.model('User', userSchema);
