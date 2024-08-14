import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define the routes you want to protect
const isProtectedRoute = createRouteMatcher(["/support(.*)", "/profile(.*)"]);

export default clerkMiddleware((auth, req) => {
  // Protect specified routes
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    // Ensure the middleware is applied to all routes except the ones listed below
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes and dynamic routes like `/api/(.*)`
    "/(api|trpc)(.*)",
  ],
};
