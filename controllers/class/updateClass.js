import { Class } from '@/models/class';
import { updateSubjectValidation } from '@/schemas/subjectSchema';
import { handleError } from '@/utils/functions';
import { NextResponse } from 'next/server';

export async function updateClass(req, id) {
  try {
    const body = await req.json();

    const validatedBody = { ...body };
    await updateSubjectValidation.validate(validatedBody);

    const updatedClass = await Class.findByIdAndUpdate(id, body, { new: true, runValidators: true })
      .populate('teacher')
      .orFail(() => new Error('Class not found'));

    return NextResponse.json(
      {
        success: true,
        message: 'Class updated successfully',
        data: updatedClass,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error, 'ERROR AL UPDATE');
    if (error.name === 'MongoServerError') {
      const errorMessage = handleError(error);

      return NextResponse.json(
        {
          success: false,
          message: errorMessage,
          errors: {
            code: 11000,
            message: 'REQUEST_NOT_VALID',
          },
        },

        { status: 400 },
      );
    }

    if (error.name === 'ValidationError') {
      const errors = error.inner?.reduce(
        (acc, err) => ({
          ...acc,
          [err.path]: err.errors[0],
        }),
        {},
      ) || { [error.path]: error.message };
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors,
        },
        { status: 400 },
      );
    }

    if (error.message === 'Class not found') {
      return NextResponse.json(
        {
          success: false,
          message: 'Class not found',
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 },
    );
  }
}
