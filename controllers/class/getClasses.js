import { Class } from '@/models/class';
import { NextResponse } from 'next/server';
import { setToken } from '@/cookies/server';

export async function getClasses() {
  try {
    const { userId } = await setToken();

    const classes = await Class.find({ teacher: userId })
      .populate('teacher')
      .orFail(() => new Error('No classes found'));
    return NextResponse.json(
      {
        success: true,
        message: 'Classes found successfully',
        data: classes,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error fetching classes');

    return NextResponse.json(
      {
        success: false,
        message: 'Error fetching classes',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      },
      { status: 500 },
    );
  }
}
