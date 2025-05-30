import { NextResponse } from 'next/server';
import Users from '@/models/user';

// export async function GET() {
//   await connectDB();
//   const users = await Users.find();
//   return NextResponse.json({ message: users });
// }

export async function getUserById(id) {
  try {
    const user = await Users.findById(id)
      .select('-password')
      .populate()
      .orFail(() => new Error('No user found'));
    return NextResponse.json(
      {
        success: true,
        message: 'User found successfully',
        data: user,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error fetching user:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Error fetching user',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      },
      { status: 500 },
    );
  }
}
