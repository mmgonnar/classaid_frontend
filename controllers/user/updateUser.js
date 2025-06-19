import { NextResponse } from 'next/server';
import Users from '@/models/user';
import { validationUpdateUser } from '@/lib/schemas';
import { handleError } from '@/utils/functions';

export async function updateUser(id, req) {
  try {
    // if (!id) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message: 'User ID',
    //     },
    //     { status: 400 },
    //   );
    // }

    const userExists = await Users.findById(id);
    if (!userExists) {
      return NextResponse.json(
        {
          success: false,
          message: 'No user found',
        },
        { status: 404 },
      );
    }

    const body = await req.json();
    if (body.email) {
      const emailExists = await Users.findOne({ email: body.email, _id: { $ne: id } });
      if (emailExists) {
        return NextResponse.json(
          {
            success: false,
            message: 'Unable to update email',
            errors: {
              email: 'Please use a different email address.',
            },
          },
          { status: 400 },
        );
      }
    }

    const validatedData = await validationUpdateUser.validate(body, {
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
    // console.error('Error updating user:', {
    //   name: error.name,
    //   code: error.code,
    //   message: error.message,
    //   stack: error.stack,
    // });

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

    if (error.message === 'No user found') {
      return NextResponse.json(
        {
          success: false,
          message: 'User not found',
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
