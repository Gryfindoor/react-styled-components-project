import React from "react";
import Section from "../globals/Section";
import Title from "../globals/Title";
import aboutImg from "../../images/aboutBcg.jpeg";
import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media,
} from "../../styles";
import styled from "styled-components";
import { PrimaryBtn } from "../globals/Buttons";
const About = () => {
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img src={aboutImg} alt="about us" />
        </div>
        <div className="about-info">
          <Title title="about us" center />
          <p>
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez
            nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć
            wieków później zaczął być używany przemyśle elektronicznym,
            pozostając praktycznie niezmienionym. Spopularyzował się w latach
            60. X
          </p>
          <PrimaryBtn>read more!</PrimaryBtn>
        </div>
      </AboutCenter>
    </Section>
  );
};
const AboutCenter = styled.div`
  .about-img,
  .about-info {
    padding: ${setRem(30)};
  }
  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })};
    }
  }
  .about-info {
    p {
      ${setLetterSpacing(3)};
    }
  }
  width: 90vw;
  margin: 0 auto;
  ${media.desktop`
  .about-img,
  .about-info {
    padding: ${setRem(0)};
  }
  width: 100vw;
  max-width: 1170px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${setRem(32)};
  .about-img,.about-info{
    align-self: center;
  }
  .about-info{
      p{
          width: 80%;
      }
  }

  `}
`;
export default About;
