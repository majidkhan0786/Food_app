//The middleware is self-executing code that runs before the routing request to process
//incoming requests and perform tasks such as logging, authentication, or data validation.
import { NextResponse } from "next/server";

export function middleware(request: Request) {
  // if (request.nextUrl.pathname != "/login") {
  return NextResponse.redirect(new URL("/login", request.url));
  // }
}
export const config = {
  matcher: ["/cart/:path*", "/profile/:path*"],
};
