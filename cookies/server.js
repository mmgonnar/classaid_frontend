'use server';

import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

export async function setToken() {
  const JWT_SECRET = process.env.JWT_SECRET || secret;
  const secret = new TextEncoder().encode(JWT_SECRET);
  try {
    const cookieStore = await cookies();
    const authorizationHeader = cookieStore.get('token');
    const token = authorizationHeader?.value.replace('Bearer ', '');

    const { payload } = await jwtVerify(token, secret);

    const userId = payload.id;
    return { success: true, userId: userId };
  } catch (error) {
    console.error('Error getting UserID');
    return { success: false, error: error.message };
  }
}
