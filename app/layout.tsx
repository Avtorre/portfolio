import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from "next/font/google";
import "./globals.css";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import { Providers } from "@/store/Providers";
import { store } from "@/store/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers store={store}>
        <body className={`${inter.className} bg-slate-300 flex flex-col min-h-screen`}>
          <CustomNavbar/>
            <main className="flex-1">{children}</main>
          <Footer/>
        </body>
      </Providers>
    </html>
  );
}
