import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  canonicalPath?: string
  noindex?: boolean
  ogTitle?: string
  ogDescription?: string
}

const BASE_URL = 'https://stepprepare.com'
const OG_IMAGE = `${BASE_URL}/og-image.jpg`
const SITE_NAME = 'USMLE Prep Platform'

export default function SEO({
  title,
  description,
  canonicalPath,
  noindex = false,
  ogTitle,
  ogDescription,
}: SEOProps) {
  const fullTitle = title.includes('USMLE Prep')
    ? title
    : `${title} | USMLE Prep`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      )}
      {canonicalPath && <link rel="canonical" href={`${BASE_URL}${canonicalPath}`} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={`${BASE_URL}${canonicalPath || '/'}`} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  )
}
