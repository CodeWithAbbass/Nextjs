// Middleware allows you to run code before a request is completed.
// Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.
import { NextResponse } from "next/server";

const middleware = (req) => {
  // return NextResponse.redirect(new URL("/login", req.url));
};
export default middleware;

// See "Matching Paths"
// export const config = {
//   matcher: "/blog/:path*",
// };
// export const config = {
//   matcher: ["/about/:path*", "/dashboard/:path*"],
// };
