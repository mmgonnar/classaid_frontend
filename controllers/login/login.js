import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import Users from '@/models/user';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

const { JWT_SECRET = 'secret' } = process.env;

export async function login(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: 'Credentials needed',
        },
        { status: 400 },
      );
    }

    const user = await Users.findOne({ email })
      .select('+password')
      .orFail(() => new Error('No user found'));

    const matched = await bcrypt.compare(password, user.password);
    if (!matched) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid credentials',
        },
        { status: 401 },
      );
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
    const cookieStore = await cookies();
    cookieStore.set('token', token);

    return NextResponse.json(
      {
        success: true,
        message: 'Login successful',
        data: {
          token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            rol: user.rol,
          },
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error finding user:', error);

    if (error.message === 'No user found') {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid credentials',
        },
        { status: 401 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Error logging in',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      },
      { status: 500 },
    );
  }
}
