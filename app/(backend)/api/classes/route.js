'use server';
import { createClass } from '@/controllers/class/createClass';
import { getClasses } from '@/controllers/class/getClasses';
import { getFavoriteClasses } from '@/controllers/class/getFavoriteClasses';
import connectDB from '@/lib/mongodb';

export async function GET(req, { params }) {
  await connectDB();
  return getClasses();
}

export async function POST(req) {
  await connectDB();
  return createClass(req);
}
