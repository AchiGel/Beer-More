import "./App.css";
import styled from "styled-components";
import logo from "./assets/logo.png";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export interface BeerData {
  id: number;
  icon: string;
  title: string;
  subtitle: string | null;
  flag: string;
  alcohol: number;
  filtered: boolean;
  price: number;
  discount: number | null;
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
  margin-top: 50px;
  width: 50vw;
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
      <Outlet />
      <div>
        <button>
          <Link to="1">first</Link>
        </button>
        <button>
          <Link to="2">second</Link>
        </button>
      </div>
    </div>
  );
}

export default App;
