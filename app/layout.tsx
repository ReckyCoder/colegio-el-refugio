import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Providers from "./provider";
import { ThemeProvider } from "next-themes";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Colegio El Refugio",
  description: "Colegio El Refugio - Educación de calidad en un entorno seguro y acogedor para el desarrollo integral de los niños.",
  icons: {
    icon: '/logo/insignia.jpg',
    shortcut: '/logo/insignia.jpg',
    apple: '/logo/insignia.jpg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased bg-stone-100 dark:bg-stone-800`}
      >
        <ThemeProvider>
          <Header/>
          <Providers>
              {children}
              <Form />
          </Providers>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
