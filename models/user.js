import mongoose from 'mongoose';
import validator from 'validator';
import { validationFront as yupUserSchema } from '../lib/schemas';
import { ROL } from '@/utils/enums';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
    },
    lastName: { type: String, default: 'test' },
    email: {
      type: String,
      unique: true,
      validate: {
        validator: (email) => {
          return validator.isEmail(email);
        },
        message: 'Invalid email format',
      },
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    rol: {
      type: String,
      enum: Object.values(ROL),
      default: ROL.TEACHER,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

// userSchema.pre('save', async function (next) {
//   try {
//     const userData = this.toObject();
//     delete userData.__v;
//     delete userData._id;

//     await yupUserSchema.validate(userData, { abortEarly: false });
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

// userSchema.pre('findOneAndUpdate', async function (next) {
//   try {
//     const update = this.getUpdate();
//     await yupUserSchema.validate(update, { abortEarly: false });
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

export default mongoose.models.User || mongoose.model('User', userSchema);
