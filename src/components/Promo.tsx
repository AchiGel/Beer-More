import styled from "styled-components";

const PromoDiv = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: #00000094;
  position: absolute;
  left: 20%;
  top: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  font-size: 2.5vw;
  color: #ffc107;
`;

export default function Promo({ promo }: { promo: string | number }) {
  return <PromoDiv>{promo}</PromoDiv>;
}
