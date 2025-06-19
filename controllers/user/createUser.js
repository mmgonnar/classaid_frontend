import { NextResponse } from 'next/server';
import Users from '@/models/user';
import { validationFront } from '@/lib/schemas';
import bcrypt from 'bcryptjs';
import { handleError } from '@/utils/functions';
//import jwt from 'jsonwebtoken';

export async function createUser(req) {
  try {
    const body = await req.json();
    const validatedData = await validationFront.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });
    const { confirmPassword, ...data } = validatedData;
    const hash = await bcrypt.hash(data.password, 12);
    const userData = { ...data, password: hash };
    const newUser = await Users.create(userData);

    return NextResponse.json(
      {
        success: true,
        message: 'User created successfully',
        data: { name: newUser.name, email: newUser.email },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error('Error creating user:', {
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
          //error
          errors: {
            code: 11000,
            message: 'AUTH_DUPLICATE',
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
        message: 'Error creating user',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      },
      { status: 400 },
    );
  }
}
