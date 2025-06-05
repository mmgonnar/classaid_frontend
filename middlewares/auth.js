//require('dotenv').config();
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
const { JWT_SECRET = 'secret-token' } = process.env;

export function authMiddleware(req) {
  const { authorization } = req.headers;

  if (!authorization) {
    return NextResponse.json({ message: 'Need Authorization' }, { status: 401 });
  }

  const token = authorization.replace('Bearer ', '');
  try {
    const payload = jwt.verify(token, JWT_SECRET);

    req.user = payload;
    return NextResponse.next();
  } catch {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
}

// module.exports = (req, res, next) => {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     return res.status(401).send({ message: "Need Authorization" });
//   }

//   const token = authorization.replace("Bearer ", "");
//   try {
//     const payload = jwt.verify(token, JWT_SECRET);
//     req.user = payload;
//     next();
//   } catch {
//     return res.status(401).send({ message: "Invalid token" });
//   }
// };
