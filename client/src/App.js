import React from "react";
import ContentArea from "./elements/ContentArea";
import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <ContentArea>
        <Home />
        <Footer />
      </ContentArea>
    </>
  );
}

export default App;
