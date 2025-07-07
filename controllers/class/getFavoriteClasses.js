'use server';

import { setToken } from '@/cookies/server';
import { Class } from '@/models/class';
import { NextResponse } from 'next/server';

export async function getFavoriteClasses() {
  try {
    const { userId } = setToken();

    const favoriteClasses = await Class.find({ teacher: userId, favorite: true })
      // .populate('teacher')
      // .select(+favorite)
      .sort({ createdAt: -1 })
      .orFail(() => new Error('No classes found'));
    return NextResponse.json(
      {
        success: true,
        message: 'Favorite classes found successfully',
        data: favoriteClasses,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error.message);
    console.error('Error fetching classes');
  }
  return NextResponse.json(
    {
      success: false,
      message: 'Error fetching favorite classes',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    },
    { status: 500 },
  );
}
