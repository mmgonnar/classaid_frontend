import { NextResponse } from 'next/server';
import Users from '@/models/user';
import { validationFront } from '@/lib/schemas';
import bcrypt from 'bcryptjs';

export async function deleteUser(id) {
  try {
    const user = await Users.findByIdAndDelete(id).orFail(() => new Error('No user found'));

    return NextResponse.json(
      {
        success: true,
        message: 'User deleted successfully',
        data: user,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error deleting user:', error);

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
        message: 'Error deleting user',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      },
      { status: 500 },
    );
  }
}
