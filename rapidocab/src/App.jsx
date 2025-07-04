import React from "react";
import Navbar from "./Navbar";
import RapidoCab from "./RapidoCab";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Navbar />
      {/* <main style={{ backgroundColor: "#e9ecef", minHeight: "80vh", paddingBottom: "40px" }}> */}
        <RapidoCab />
      {/* </main> */}
      <Footer />
    </>
  );
}
