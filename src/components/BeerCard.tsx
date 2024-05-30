import { BeerData } from "../App";
import styled from "styled-components";
import alco from "../assets/blood-test.png";
import cardBackground from "../assets/wall-texture-grey-backgrounds.jpg";
import filter from "../assets/unfiltered.png";

const BeerCardComp = styled.div`
  background-image: url(${cardBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  position: relative;
  padding: 20px 0px 0px 20px;
  display: flex;
  flex-direction: column;
  color: white;
`;

const BeerLogo = styled.div<BeerData>`
  position: absolute;
  left: -20px;
  top: -20px;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-image: url(${(props) => props.icon});
  background-size: cover;
  background-position: center;
`;

const AlcoPercentage = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  max-width: 20px;
`;

const BottomSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PriceBox = styled.div`
  border-radius: 15px;
  border: 1px solid black;
  position: relative;
  width: 30%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function BeerCard(props: BeerData) {
  return (
    <BeerCardComp>
      <BeerLogo icon={props.icon} />
      <h1 style={{ textAlign: "center" }}>{props.title}</h1>
      <BottomSection>
        <AlcoPercentage>
          <img src={alco} style={{ width: "100%" }} />
          <span>{props.alcohol}%</span>
        </AlcoPercentage>
        {props.filtered ? null : <img src={filter} style={{ width: "40px" }} />}
        <PriceBox>
          <img
            src={props.flag}
            style={{ width: "50px", position: "absolute", left: "-55px" }}
          />
          <h2 style={{ color: "yellow" }}>{props.price} ₾</h2>
        </PriceBox>
      </BottomSection>
    </BeerCardComp>
  );
}
