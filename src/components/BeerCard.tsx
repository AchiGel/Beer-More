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
  justify-content: space-between;
  color: white;
  height: 30vh;
`;

interface BeerLogoProps {
  icon: string;
  onClick: () => void;
}

const BeerLogo = styled.div<BeerLogoProps>`
  position: absolute;
  left: -35px;
  top: -35px;
  border-radius: 50%;
  width: 8vw;
  height: 8vw;
  background-image: url(${(props) => props.icon});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const AlcoPercentage = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
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
  padding: 0.5vw;
`;

const OutOfStock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: red;
  font-size: 3vw;
`;

export default function BeerCard(props: BeerData) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      {isClicked ? (
        <BeerCardComp
          style={{
            backgroundImage: "url()",
            backgroundColor: "grey",
            alignItems: "flex-end",
          }}
        >
          <BeerLogo
            icon={props.icon}
            onClick={() => setIsClicked(!isClicked)}
          />
          <h1 style={{ textAlign: "center", fontSize: "2.5vw" }}>
            {props.title}
          </h1>
          <OutOfStock>მარაგი ამოწურულია</OutOfStock>
        </BeerCardComp>
      ) : (
        <BeerCardComp>
          <BeerLogo
            icon={props.icon}
            onClick={() => setIsClicked(!isClicked)}
          />
          <h1 style={{ textAlign: "right", fontSize: "2.5vw" }}>
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
                  color: "#ffc107",
                  fontWeight: "bold",
                  fontSize: "2vw",
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
                  width: "3vw",
                  position: "absolute",
                  left: "-3vw",
                  top: "-10px",
                }}
              />
              <h2 style={{ color: "#ffc107", fontSize: "4vw" }}>
                {props.price} ₾
              </h2>
            </PriceBox>
          </BottomSection>
        </BeerCardComp>
      )}
    </>
  );
}
