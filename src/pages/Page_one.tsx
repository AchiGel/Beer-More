import styled from "styled-components";
import beerData from "../beersNames.json";
import BeerCard from "../components/BeerCard";

export const RightSection = styled.section`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  gap: 25px;
  padding: 25px 25px 25px 0;
`;

export default function Page_one() {
  return (
    <RightSection>
      {beerData
        .filter((el) => el.id < 9)
        .map((item) => (
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
  );
}
