'use server';
import { setToken } from '@/cookies/server';
import { Class } from '@/models/class';
import { subjectValidationBack } from '@/schemas/subjectSchema';
import { NextResponse } from 'next/server';

export async function createClass(req) {
  try {
    const body = await req.json();
    console.log(body, 'BODY');
    const { userId } = await setToken();

    const validatedBody = { ...body, teacher: userId, favorite: false };
    console.log(userId, 'ssadasdasdasd');
    await subjectValidationBack.validate(validatedBody);

    const newClass = await Class.create(validatedBody);
    console.log(newClass, 'NEW CLASS');

    return NextResponse.json(
      {
        success: true,
        message: 'Class created successfully',
        data: newClass,
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
  console.log('🚀 ~ createClass.js:78 ~ createClass ~ validatedBody:', validatedBody);
}
