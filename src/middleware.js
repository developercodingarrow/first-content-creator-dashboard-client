import { NextResponse } from "next/server";
import { getUserAuthantication } from "./app/lib/authentication";

export async function middleware(request) {
  const isAuthToken = request.cookies.get("jwt")?.value;

  const userData = await getUserAuthantication(); // Get decrypted user data
  const userRole = userData?.role; // Ensure user data is valid before accessing the role
  const url = request.nextUrl;
  const pathname = url.pathname;
  // Allow static files and Next.js assets to be loaded
  if (
    pathname.startsWith("/_next/") || // Next.js build assets
    pathname.startsWith("/static/") || // Static files
    /\.(.*)$/.test(pathname) // Files like .css, .js, .png, .jpg, etc.
  ) {
    return NextResponse.next();
  }

  // Allow access to /auth/login for unauthenticated users
  if (!isAuthToken) {
    if (pathname.startsWith("/auth")) {
      return NextResponse.next(); // Allow login page
    } else {
      // Redirect unauthenticated users to /auth/login
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  // Handle authenticated users
  if (isAuthToken) {
    try {
      const userData = await getUserAuthantication(); // Get decrypted user data
      if (!userData) {
        // If user data is invalid, redirect to login
        return NextResponse.redirect(new URL("/auth/login", request.url));
      }

      // Prevent logged-in users from accessing the login page
      if (pathname.startsWith("/auth")) {
        return NextResponse.redirect(new URL("/", request.url)); // Redirect to the homepage
      }

      // Allow authenticated users to access other routes
      return NextResponse.next();
    } catch (error) {
      console.error("Authentication error:", error);
      return NextResponse.redirect(new URL("/auth/login", request.url)); // Redirect on error
    }
  }

  // Restrict logged-in users from accessing /auth-related paths
  if (isAuthToken && url.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", request.url)); // Redirect to the homepage
  }
  // // Restrict non-logged-in users from accessing protected routes
  // if (!isAuthToken || !userData) {
  //   if (!url.startsWith("/auth")) {
  //     return NextResponse.redirect(new URL("/auth/login", request.url)); // Redirect to the login page
  //   }

  //   return NextResponse.next(); // Allow access to authentication-related paths
  // }

  // // Role-based access control for logged-in users (example: superAdmin role)
  // if (userRole === "superAdmin") {
  //   if (url.startsWith("/")) {
  //     return NextResponse.next(); // Allow access to all routes
  //   } else {
  //     return NextResponse.redirect(new URL("/", request.url)); // Redirect to homepage for other routes
  //   }
  // }

  // Default fallback
  return NextResponse.next();
}

// Default fallback for other roles or conditions

export const config = {
  // matcher: ["/test/:path*"],
  matcher: ["/:path*"], // Match all routes
};
