import React from "react";
import Hero from "../globals/Hero";
import homeImg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";
import {PrimaryBtn} from '../globals/Buttons';
const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting="welcome to"
        title="beachwalk resort"
        text="Jeśli jesteś autorem wiersza zapoznaj się z zasadami publikacji i skorzystaj z formularza by przesłać swoje prace. Kolekcja wierszy jest systematycznie powiększana tak więc mamy nadzieję że często będziesz do nich wracać."
      >
       <PrimaryBtn t="1rem">
         Viev details
         </PrimaryBtn> 
      </Banner>

    </Hero>
  );
};

export default Header;
