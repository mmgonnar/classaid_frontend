import { Class } from '@/models/class';
import { NextResponse } from 'next/server';

export async function deleteClass(id) {
  try {
    const subject = await Class.findByIdAndDelete(id)
      .populate('teacher')
      .orFail(() => new Error('Class not found'));

    return NextResponse.json(
      {
        success: true,
        message: 'Class deleted successfully',
        data: subject,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error deleting class:', error);

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
        message: 'Error deleting class',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
      },
      { status: 500 },
    );
  }
}
