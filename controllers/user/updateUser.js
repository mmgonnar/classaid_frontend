import { NextResponse } from 'next/server';
import Users from '@/models/user';
import { validationBack } from '@/lib/schemas';

export async function updateUser(id, req) {
  try {
    const body = await req.json();

    const validatedData = await validationBack.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });

    const updateUser = await Users.findByIdAndUpdate(id, validatedData, { new: true })
      .select('-password')
      .orFail(() => new Error('No user found'));

    return NextResponse.json(
      {
        success: true,
        message: 'User updated successfully',
        data: updateUser,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error updating user:', error);

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

    if (error.message === 'No user found') {
      return NextResponse.json(
        {
          success: false,
          message: 'User not found',
        },
        { status: 404 },
      );
    }
  }
}
