import type { Metadata } from "next";
import Header from "./components/Header/Header";
import "./globals.css";
import Footer from './components/Footer/Footer';
import { FormProvider } from "./contexts/FormContext";

export const metadata: Metadata = {
  title: "Test",
  description: "Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <FormProvider> 
          <Header />
          <main>{children}</main>
          <Footer />
        </FormProvider>
      </body>
    </html>
  );
}
