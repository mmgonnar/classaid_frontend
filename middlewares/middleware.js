import { authMiddleware } from './auth';
import { corsMiddleware } from './cors';
import { protectedRoutesMiddleware } from './protectedRoutes';

async function compose(...middlewares) {
  return async (req) => {
    for (const middleware of middlewares) {
      const result = await middleware(req);
      if (result) return result;
    }
    return NextResponse.next();
  };
}

export default compose(corsMiddleware, protectedRoutesMiddleware);

export const config = {
  matcher: ['/api/:path*', '/((?!_next/static|_next/image|favicon.ico).*)'],
};
