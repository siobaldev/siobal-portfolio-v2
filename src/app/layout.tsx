import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

const martianGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/MartianGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/MartianGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/MartianGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-martian-grotesk",
  display: "swap",
});

const description =
  "Hey there! I'm Minard Siobal, a web developer who designs in Figma and develops thoughtful, user-focused digital products for the web, from idea to code.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Minard Siobal — Web Developer & Designer",
  description: description,
  keywords: [
    "Minard Siobal",
    "Web Developer",
    "Frontend Developer",
    "Full-Stack Developer",
    "UI/UX Designer",
    "React",
    "Next.js",
    "TypeScript",
    "Figma",
  ],
  openGraph: {
    title: "Explore Minard Siobal’s Portfolio — Web Developer & Designer",
    description:
      "Web developer who designs in Figma and develops thoughtful, user-focused products for the web, from idea to code.",
    url: siteUrl,
    siteName: "Minard Siobal — Web Developer & Designer",
    images: [
      {
        url: `${siteUrl}"/assets/og-image.webp`,
        width: 1200,
        height: 630,
        alt: "Minard Siobal Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Minard Siobal’s Portfolio — Web Developer & Designer",
    description: description,
    images: [`${siteUrl}"/assets/og-image.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${martianGrotesk.variable} h-full bg-background font-martian text-body text-foreground antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="siobaldev" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
