import type { Metadata } from "next";
import "./globals.css";
import { FormProvider } from "./contexts/FormContext";
import Header from "./components/Header/Header";
import TextSlider from "./components/Slider/TextSlider";
import Footer from './components/Footer/Footer';

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
          <div className="bg-no-repeat bg-cover background-image" style={{ backgroundImage: "url('./img/sliderFirst.png')" }}>
            <Header />
            <TextSlider />
          </div>
          <main>{children}</main>
          <Footer />
        </FormProvider>
      </body>
    </html>
  );
}
