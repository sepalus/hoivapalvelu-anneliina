import React from "react";
import Banner from "../elements/Banner";
import InfoCardContainer from "../elements/InfoCardContainer";
import InfoCard from "../elements/InfoCard";
import Footer from "../elements/Footer";
import ScrollArea from "../components/ScrollArea";

export default function Services() {
  return (
    <div className="services">
      <ScrollArea>
        <Banner
          imageFileName="services.jpeg"
          title="Palvelut"
          text="Tarjoamme yksilöllistä ja luotettavaa hoivapalvelua kaikille sitä tarvitseville. Meiltä saat sairaanhoitoa kotiin kuljetettuna, apua kotona asumiseen, henkilökohtaista apua ja voimia vapaista. Kaikkea ei tarvitse tehdä itse. Nyt saat myös halutessasi apua arkeen kuten ruoan valmistukseen, asiointiin tai siivoukseen. Huolehdimme tarvittaessa myös lemmikistäsi ja kasveistasi. Huomioimme aina sinun arkesi ja tottumuksesi. Toimimme laadukkaasti ja luotettavasti, emmekä tunne sanaa kiire. Räätälöimme palvelut juuri sinulle sopiviksi. Yhdessä varmistamme, että palvelusta tulee juuri sellainen kuin olet toivonutkin. Tavoitteemme on aina toimia asiakkaan ehdoilla ja yllättää sinut positiivisesti."
          hasOverlay={true}
        />
        <InfoCardContainer title="Palvelukokonaisuudet" backgroundColor="beige">
          <InfoCard
            iconFileName="anneliinan-kotisairaanhoito.png"
            logoFileName="anneliinan-kotisairaanhoito.png"
          />
          <InfoCard
            iconFileName="anneliinan-kotisairaanhoito.png"
            logoFileName="anneliinan-koti.png"
          />
          <InfoCard
            iconFileName="anneliinan-kotisairaanhoito.png"
            logoFileName="anneliinan-paivatoiminta.png"
          />
        </InfoCardContainer>
        <Footer />
      </ScrollArea>
    </div>
  );
}
