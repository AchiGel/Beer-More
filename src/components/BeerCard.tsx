import { BeerData } from "../App";
import styled from "styled-components";
import alco from "../assets/blood-test.png";
import cardBackground from "../assets/wall-texture-grey-backgrounds.jpg";
import filter from "../assets/unfiltered.png";
import { useState } from "react";

const BeerCardComp = styled.div`
  background-image: url(${cardBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: white;
  gap: 20px;
`;

interface BeerLogoProps {
  icon: string;
  onClick: () => void;
}

const BeerLogo = styled.div<BeerLogoProps>`
  position: absolute;
  left: -20px;
  top: -20px;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-image: url(${(props) => props.icon});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const AlcoPercentage = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  max-width: 40px;
`;

const BottomSection = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const PriceBox = styled.div`
  border-radius: 15px;
  border: 2px solid white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const OutOfStock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: red;
  font-size: 30px;
`;

export default function BeerCard(props: BeerData) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      {isClicked ? (
        <BeerCardComp
          style={{ backgroundImage: "url()", backgroundColor: "grey" }}
        >
          <BeerLogo
            icon={props.icon}
            onClick={() => setIsClicked(!isClicked)}
          />
          <h1 style={{ textAlign: "center" }}>{props.title}</h1>
          <OutOfStock>Out Of Stock</OutOfStock>
        </BeerCardComp>
      ) : (
        <BeerCardComp>
          <BeerLogo
            icon={props.icon}
            onClick={() => setIsClicked(!isClicked)}
          />
          <h1 style={{ textAlign: "center" }}>{props.title}</h1>
          <BottomSection>
            <AlcoPercentage>
              <img src={alco} style={{ width: "100%" }} />
              <span>{props.alcohol}%</span>
            </AlcoPercentage>
            {props.filtered ? null : (
              <img src={filter} style={{ width: "40px" }} />
            )}
            <PriceBox>
              <img
                src={props.flag}
                style={{
                  width: "50px",
                  position: "absolute",
                  left: "-55px",
                  top: "0",
                }}
              />
              <h2 style={{ color: "yellow", fontSize: "50px" }}>
                {props.price} ₾
              </h2>
            </PriceBox>
          </BottomSection>
        </BeerCardComp>
      )}
    </>
  );
}
