import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ThemeProvider } from "@/components/theme-provider";
import { baseMetadata } from "@/lib/seo";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>
          <ScrollProgress />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
