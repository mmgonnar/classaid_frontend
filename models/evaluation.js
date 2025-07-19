import mongoose from 'mongoose';

const evaluationSchema = new mongoose.Schema(
  {
    Type: {
      type: String,
      min: 2,
      max: 30,
    },
    description: {
      type: String,
      maxlength: 100,
    },
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
    score: { type: Number, min: 0, max: 10 },
    value: { type: Number, min: 0, max: 100 },
  },
  { timestamps: true },
);

export default mongoose.models.Evaluation || mongoose.model('Evaluation', evaluationSchema);
