import mongoose from 'mongoose';

import { userSchema as yupUserSchema } from '../schemas/userSchema';
import { ROL } from '@/utils/enums';

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
    },
    lastName: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
    },
    studentNumber: {
      type: String,
      required: false,
      unique: true,
    },
    rol: {
      type: String,
      enum: Object.values(ROL),
      default: ROL.STUDENT,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Student || mongoose.model('Student', studentSchema);
