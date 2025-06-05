import { NextResponse } from 'next/server';
import Users from '@/models/user';
import connectDB from '@/lib/mongodb';

export async function deleteAllUsers() {
  try {
    await connectDB();
    const result = await Users.deleteMany({});

    return NextResponse.json(
      {
        success: true,
        message: 'All users deleted successfully',
        data: result,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error deleting users:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Error deleting users',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      },
      { status: 500 },
    );
  }
}
