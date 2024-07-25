import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import React from "react";

export default function LandingLayout({ children }:{children: React.ReactNode}) {
  return (
    <>
        <Navbar />
            {children}
        <Footer />
    </>
  )
}
