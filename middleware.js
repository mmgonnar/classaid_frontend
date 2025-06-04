import middleware from './middlewares/composedMiddleware';

export { middleware as default };

export const config = {
  matcher: ['/api/:path*', '/((?!_next/static|_next/image|favicon.ico).*)'],
};
