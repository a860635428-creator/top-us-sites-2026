// Vercel Edge Middleware — Block mainland China IPs
// Vercel provides geo info via: request.geo.country or x-vercel-ip-country header

// Vercel Edge Middleware — Block mainland China IPs, BUT always allow
// crawler/compliance files required by Google AdSense / Search Console.
const ALWAYS_ALLOW = new Set([
  '/ads.txt',
  '/robots.txt',
  '/sitemap.xml',
  '/rss.xml',
  '/manifest.json',
  '/sw.js',
  '/favicon.ico',
  '/apple-touch-icon.png',
]);

export default function middleware(request: Request) {
  const { pathname } = new URL(request.url);

  // AdSense/Search crawlers must be able to fetch compliance files regardless
  // of geo location. Blocking ads.txt violates AdSense policy and causes
  // "ads.txt not found" in the AdSense dashboard.
  if (ALWAYS_ALLOW.has(pathname) || pathname.startsWith('/favicon') || pathname.startsWith('/apple-touch-icon')) {
    return fetch(request);
  }

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
