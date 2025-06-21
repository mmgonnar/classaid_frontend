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
      select: false,
    },
    rol: {
      type: String,
      enum: Object.values(ROL),
      default: ROL.STUDENT,
      select: false,
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Student || mongoose.model('Student', studentSchema);
