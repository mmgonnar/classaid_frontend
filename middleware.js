import middleware from './middlewares/middleware';

export default await middleware;

export const config = {
  matcher: ['/api/:path*', '/((?!_next/static|_next/image|favicon.ico).*)'],
};
