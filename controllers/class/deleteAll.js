import { Class } from '@/models/class';
import { NextResponse } from 'next/server';

export async function deleteAllClasses() {
  try {
    const result = await Class.deleteMany({});

    return NextResponse.json(
      {
        success: true,
        message: 'All classes deleted',
        data: result,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error deleting classes:', error);

    return NextResponse.json({
      success: false,
      message: 'Error deleting users',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
}
