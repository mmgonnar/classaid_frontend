import { Class } from '@/models/class';
import { NextResponse } from 'next/server';

export async function getClasses(id) {
  try {
    const classes = await Class.find({ teacher: '68447b7e8127b0ac189e1c95' })
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
