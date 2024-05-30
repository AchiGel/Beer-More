import "./App.css";
import BeerCard from "./components/BeerCard";
import beerData from "./beersNames.json";
import styled from "styled-components";
import beer from "./assets/Beer.svg.png";

export interface BeerData {
  id: number;
  icon: string;
  title: string;
  flag: string;
  alcohol: number;
  filtered: boolean;
  price: number;
}

const LeftSection = styled.section`
  width: 30%;
`;

const LeftSectionImg = styled.img`
  width: 50%;
`;

const RightSection = styled.section`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 30px;
`;

function App() {
  return (
    <div className="App">
      <LeftSection>
        <LeftSectionImg src={beer} />
      </LeftSection>
      <RightSection>
        {beerData.map((item) => (
          <BeerCard
            key={item.id}
            title={item.title}
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
