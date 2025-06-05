import { NextResponse } from 'next/server';
import Users from '@/models/user';

// export async function GET() {
//   await connectDB();
//   const users = await Users.find();
//   return NextResponse.json({ message: users });
// }

export async function getUsers() {
  try {
    const users = await Users.find()
      .select('-password')
      .orFail(() => new Error('No users found'));
    return NextResponse.json(
      {
        success: true,
        message: 'Users found successfully',
        data: users,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error fetching users:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Error fetching users',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      },
      { status: 500 },
    );
  }
}
