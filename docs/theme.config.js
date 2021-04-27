export default {
  repository: 'https://github.com/jcarlos0511/bsale-store',
  docsRepository: 'https://github.com/jcarlos0511/bsale-store',
  branch: 'docs',
  path: '/docs',
  titleSuffix: ' – Test',
  nextLinks: true,
  prevLinks: true,
  search: true,
  darkMode: true,
  footer: true,
  footerText: `${new Date().getFullYear()} © Chara-`,
  footerEditOnGitHubLink: true,
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">BSale store</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Documentación
      </span>
    </>
  ),
  head: () => (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="BSale store – test." />
      <meta name="og:description" content="Bsale store - test." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jncarloschara" />
      <meta name="og:title" content="BSale store - test." />
      <meta
        name="twitter:image"
        content="https://react-2025-docs.vercel.app/og.png"
      />
      <meta
        name="og:image"
        content="https://react-2025-docs.vercel.app/og.png"
      />
      <meta name="apple-mobile-web-app-title" content="BSale store - test." />
      <link
        rel="shortcut icon"
        href="https://dojiw2m9tvv09.cloudfront.net/16738/2/favicon.ico?268"
        type="image/x-icon"
      />
    </>
  )
}
