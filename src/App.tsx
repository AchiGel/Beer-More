import "./App.css";
import BeerCard from "./components/BeerCard";
import beerData from "./beersNames.json";
import styled from "styled-components";
import logo from "./assets/logo.png";

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
  margin: 8em;
`;

const RightSection = styled.section`
  width: 85%;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  gap: 25px;
  padding: 30px;
`;

function App() {
  return (
    <div className="App">
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
