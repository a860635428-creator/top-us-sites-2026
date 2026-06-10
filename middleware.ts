// Vercel Edge Middleware — Block mainland China IPs
// Vercel provides geo info via: request.geo.country or x-vercel-ip-country header

export default function middleware(request: Request) {
  const country = request.headers.get('x-vercel-ip-country');

  if (country === 'CN') {
    return new Response(
      `Access Denied

This website is not available in your region.
Sorry for the inconvenience.`,
      {
        status: 403,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'no-store',
        },
      }
    );
  }

  // For non-Next.js frameworks, must use fetch(request) to forward the request
  return fetch(request);
}
