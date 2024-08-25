import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"

const Font_Sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400"], variable: "--font-sans" });


export const metadata: Metadata = {
  title: "CarePulse",
  description: "A Health Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-dark-300 font-sans antialiased", Font_Sans.variable)}>
        
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        
        
        </body>
    </html>
  );
}
