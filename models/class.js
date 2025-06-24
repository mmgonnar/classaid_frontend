import mongoose from 'mongoose';

const classSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: { type: String, maxlength: 500 },
    group: { type: String, maxlength: 10 },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    favorite: {
      type: Boolean,
      default: false,
      select: false,
    },
  },
  { timestamps: true },
);

export const Class = mongoose.models.Class || mongoose.model('Class', classSchema);
