import { BeerData } from "../App";
import styled from "styled-components";
import alco from "../assets/blood-test.png";

const BeerCardComp = styled.div`
  background-color: grey;
  border-radius: 20px;
  position: relative;
  padding: 20px 0px 0px 20px;
  display: flex;
  flex-direction: column;
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
        {props.filtered ? null : "X"}
        <PriceBox>
          <img
            src={props.flag}
            style={{ width: "50px", position: "absolute", left: "-55px" }}
          />
          <h2>{props.price} ₾</h2>
        </PriceBox>
      </BottomSection>
    </BeerCardComp>
  );
}
