// folder users
// get, put, patch

import { NextResponse } from 'next/server';
import Users from '@/models/user';
import connectDB from '@/lib/mongodb';
import { baseBack, validationFront } from '@/lib/schemas';

//*connection to DB

export async function GET() {
  await connectDB();
  const users = await Users.find();
  return NextResponse.json({ message: users });
}

//* CREATE User
export async function POST(request) {
  await connectDB();
  try {
    const body = await request.json();
    //await validationFont.validate(body, { abortEarly: false });

    const { confirmPassword, ...userData } = body;
    console.log(userData, 'userData', 'a');

    await baseBack.validate(userData);

    const newUser = await Users.create(userData);
    console.log(userData, 'userData', 'b');
    // const newUser = await Users.create({
    //   name,
    //   lastName,
    //   email,
    //   password,
    //   confirmPassword,
    // });

    return NextResponse.json(
      { message: 'User created successfully', user: newUser },
      { status: 201 },
    );
  } catch (error) {
    console.log(error, 'x');
    if (error.name === 'ValidationError' && error.inner) {
      const errors = {};
      error.inner.forEach((err) => {
        errors[err.path] = err.errors;
      });
      return NextResponse.json({ message: 'Validation failed', errors }, { status: 400 });
    }

    return NextResponse.json(
      { message: 'Error creating user', error: error.message },
      { status: 400 },
    );
  }
}
