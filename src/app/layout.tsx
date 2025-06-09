import type { Metadata } from "next";
import "./globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Loader from "./component/Loader";

export const metadata: Metadata = {
  title: "Fpt Clone",
  description: "This is page home Fpt clone!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <html lang="en" className="h-full w-full">
  <body
  >
    <Loader/>
    <Header/>
    <main className="  w-full mx-auto sm:px-[100px] lg:px-[180px] px-3 ">
      {children}
    </main>
    <Footer/>

  </body>
</html>

  );
}
