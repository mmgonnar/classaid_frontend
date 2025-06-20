import mongoose from 'mongoose';

const classSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: { type: String, maxlength: 200 },
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
    },
  },
  { timestamps: true },
);

export const Class = mongoose.models.Class || mongoose.model('Class', classSchema);
