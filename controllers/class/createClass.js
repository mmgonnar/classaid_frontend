import { Class } from '@/models/class';
import { baseClassSchema, classValidationFront } from '@/schemas/classSchema';
import { NextResponse } from 'next/server';

export async function createClass(req) {
  try {
    const body = await req.json();
    // const validatedData = await classValidationFront.validate(body, {
    //   abortEarly: false,
    //   stripUnknown: true,
    // });

    await baseClassSchema.validate(body);

    const newClass = await Class.create(body);

    return NextResponse.json(
      {
        success: true,
        message: 'Class created successfully',
        data: {
          name: newClass.name,
          description: newClass.description,
          teacher: newClass.teacher,
          group: newClass.group,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error('Error creating class:', {
      name: error.name,
      code: error.code,
      message: error.message,
    });
    if (error.name === 'MongoServerError') {
      const errorMessage = handleError(error);

      return NextResponse.json(
        {
          success: false,
          message: errorMessage,
          errors: {
            code: 11000,
            message: 'CLASS_DUPLICATE',
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

    return NextResponse.json(
      {
        success: false,
        message: 'Error creating class',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      },
      { status: 400 },
    );
  }
}
