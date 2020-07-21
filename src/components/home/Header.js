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
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quisquam corrupti dicta tempora sequi sapiente!"
      >
       <PrimaryBtn t="1rem">
         Viev details
         </PrimaryBtn> 
      </Banner>

    </Hero>
  );
};

export default Header;
