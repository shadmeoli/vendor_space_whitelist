import "@/styles/globals.css";
import { Raleway, Montserrat } from "next/font/google";
import { type Metadata } from "next";
import { Toaster } from "sonner";

const raleway = Raleway({
  variable: "--font-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vendor Space",
  description: "You best multivendor provider",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${raleway.variable} ${montserrat.variable}`}>
      <body>
        {children}
        <Toaster expand={true} position="top-right" richColors={true} />
      </body>
    </html>
  );
}
