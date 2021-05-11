import React from "react";
import Header from "../elements/Header";
import Banner from "../elements/Banner";
import Slogan from "../elements/Slogan";
/**import ContentArea from "./elements/ContentArea";
import ContentBlock from "./elements/ContentBlock";
import InfoCardContainer from "./elements/InfoCardContainer";
import InfoCard from "./elements/InfoCard";**/

export default function Home() {
  return (
    <div>
      <div className="full-height">
        <Header />
        <Banner />
      </div>
      <Slogan />
    </div>
  );
}
