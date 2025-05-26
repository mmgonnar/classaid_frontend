import { ATTENDANCE } from '@/utils/enums';
import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema(
  {
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    attendance: {
      type: String,
      enum: Object.values(ATTENDANCE),
      default: ATTENDANCE.PRESENT,
    },
    notes: {
      type: String,
      maxlength: 100,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Attendance || mongoose.model('Attendance', attendanceSchema);
