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
  justify-content: flex-end;
  color: white;
  gap: 20px;
  height: 23vh;
`;

interface BeerLogoProps {
  icon: string;
  onClick: () => void;
}

const BeerLogo = styled.div<BeerLogoProps>`
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  width: 5vw;
  height: 5vw;
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
  padding: 1vw;
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
          <OutOfStock>მარაგი ამოწურულია</OutOfStock>
        </BeerCardComp>
      ) : (
        <BeerCardComp>
          <BeerLogo
            icon={props.icon}
            onClick={() => setIsClicked(!isClicked)}
          />
          <h1 style={{ textAlign: "right", fontSize: "2vw" }}>
            {props.title}
          </h1>
          <h2 style={{ textAlign: "right", fontSize: "1.75vw" }}>
            {props.subtitle}
          </h2>
          <BottomSection>
            <AlcoPercentage>
              <img
                src={alco}
                style={{
                  width: "2vw",
                  filter:
                    "brightness(0) saturate(100%) invert(100%) sepia(48%) saturate(1890%) hue-rotate(12deg) brightness(106%) contrast(92%)",
                }}
              />
              <span
                style={{
                  color: "yellow",
                  fontWeight: "bold",
                  fontSize: "1.5vw",
                }}
              >
                {props.alcohol}%
              </span>
            </AlcoPercentage>
            {props.filtered ? null : (
              <img
                src={filter}
                style={{
                  width: "2vw",
                  filter:
                    "brightness(0) saturate(100%) invert(90%) sepia(77%) saturate(3902%) hue-rotate(338deg) brightness(94%) contrast(86%)",
                }}
              />
            )}
            <PriceBox>
              <img
                src={props.flag}
                style={{
                  width: "2vw",
                  position: "absolute",
                  left: "-2.5vw",
                  top: "-10px",
                }}
              />
              <h2 style={{ color: "yellow", fontSize: "3vw" }}>
                {props.price} ₾
              </h2>
            </PriceBox>
          </BottomSection>
        </BeerCardComp>
      )}
    </>
  );
}
