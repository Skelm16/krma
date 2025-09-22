import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="bg-background text-white">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="description" content="KRMA AI Agency — Practical AI automations delivered fast by founder Krish Sriram." />
      </Head>
      <body className="min-h-screen bg-background selection:bg-accent/20 selection:text-accent">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
