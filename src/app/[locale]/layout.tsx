import React from "react";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";

import NavBar from "@/components/nav";

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        <NextIntlClientProvider>
          <header>
            <NavBar />
          </header>

          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
