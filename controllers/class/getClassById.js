import { Class } from '@/models/class';
import { NextResponse } from 'next/server';

export async function getClassById(id) {
  try {
    const subject = await Class.findById(id)
      .populate()
      .orFail(() => new Error('No class found'));

    return NextResponse.json(
      {
        success: true,
        message: 'Class found successfully',
        data: subject,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error();

    return NextResponse.json(
      {
        success: false,
        message: 'Error finding class with this ID',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal Server Error',
      },
      { status: 500 },
    );
  }
}
