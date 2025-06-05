import mongoose from 'mongoose';

const scoreSchema = new mongoose.Schema(
  {
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',
      required: true,
    },
    evaluations: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Evaluation',
      required: true,
    },

    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    score: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
    note: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

export const Score = mongoose.models.Score || mongoose.model('Score', scoreSchema);
