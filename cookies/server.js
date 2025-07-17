'use server';

import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

export async function setToken() {
  const JWT_SECRET = process.env.JWT_SECRET || 'secret';
  const secret = new TextEncoder().encode(JWT_SECRET);

  try {
    const cookieStore = await cookies();
    console.log('1324324234');
    const authorizationHeader = cookieStore.get('token');
    console.log(authorizationHeader, 'AUTH');
    const token = authorizationHeader?.value.replace('Bearer ', '');
    console.log(token, 'TOKEN');

    console.log(jwtVerify(token, secret), 'AWAIT');
    const { payload } = await jwtVerify(token, secret);
    console.log(secret, 'secret');
    console.log(payload, ' payload');
    const userId = payload.id;
    console.log(userId, ' ID');

    return { success: true, userId: userId };
  } catch (error) {
    console.error('Error getting UserID');
    return { success: false, error: error.message };
  }
}
