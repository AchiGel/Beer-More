import "./App.css";
import BeerCard from "./components/BeerCard";
import beerData from "./beersNames.json";
import styled from "styled-components";
import logo from "./assets/logo.png";
import { useEffect, useState } from "react";

export interface BeerData {
  id: number;
  icon: string;
  title: string;
  subtitle: string | null;
  flag: string;
  alcohol: number;
  filtered: boolean;
  price: number;
}

const LeftSection = styled.section`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: wheat;
  gap: 30px;
  padding: 15px;
`;

const LeftSectionLogo = styled.img`
  width: 100%;
`;

const RightSection = styled.section`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  gap: 25px 25px 25px 0;
  padding: 30px;
`;

function App() {
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    function fullScreenMode() {
      document.querySelector("body")?.requestFullscreen();
    }

    fullScreenMode();
  }, [fullScreen]);

  return (
    <div className="App">
      <button
        style={{ position: "absolute", right: "0", top: "0" }}
        onClick={() => {
          setFullScreen(!fullScreen);
        }}
      >
        Full
      </button>
      <LeftSection>
        <LeftSectionLogo src={logo} />
      </LeftSection>
      <RightSection>
        {beerData.map((item) => (
          <BeerCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            id={item.id}
            icon={item.icon}
            flag={item.flag}
            alcohol={item.alcohol}
            filtered={item.filtered}
            price={item.price}
          />
        ))}
      </RightSection>
    </div>
  );
}

export default App;
