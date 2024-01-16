/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Contents from "./Contents";
import Main from "./Main";
import Head from "./Head";
import Reaction from "./Reaction";
import { useState } from "react";

function App() {
  // manage currentVolume
  const [currentVolume, setCurrentVolume] = useState(0);

  const body=css`
    background: #FFB000;
    height: 100vh;
    overflow-x: hidden;
  `
  const header=css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    @media (max-width: 767px) {
      flex-direction: column;
      gap: 24px;
    }
  `
  const title=css`
    display: flex;
    gap: 24px;
    align-items: center;
    @media (max-width: 767px) {
      align-items: normal;
    }
  `
  const logo=css`
    width: 200px;
    height: auto;
    @media (max-width: 767px) {
      width: 36%;
    }
  `
  const titleText=css`
    font-size: 1.5rem;
    @media (max-width: 767px) {
      font-size: 1.2rem;
    }
  `

  return (
    <>
      <Head />
      <body css={body}>
        <header css={header}>
          <div css={title}>
            <img css={logo} src="../dragonBall_logo.png" alt="" />
            <span css={titleText}>孫悟空の戦闘力推移</span>
          </div>
          <Contents currentVolume={currentVolume} setCurrentVolume={setCurrentVolume} />
        </header>
        <Main currentVolume={currentVolume} setCurrentVolume={setCurrentVolume} />
        <Reaction currentVolume={currentVolume} setCurrentVolume={setCurrentVolume} />
      </body>
    </>
  );
}
export default App;
