/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Kakarot } from "./compornents/Kakarot";
import CombatPower from "./CombatPower";

function Main({ currentVolume, setCurrentVolume }) {

  const imgSrc = `../../kakarot/kakarot${currentVolume}.jpg`;

  const prev = () => {
    if (currentVolume !== 0) {
      setCurrentVolume(currentVolume - 1)
    }
  };

  const next = () => {
    if (currentVolume < Kakarot.length - 1) {
      setCurrentVolume(currentVolume + 1)
    }
  };
  const mainInner = css`
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      @media (max-width: 767px) {
        flex-direction: column-reverse;
        padding: 0 16px;
        gap: 24px;
      }
  `
  const information = css`
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 36px;
      box-sizing: border-box;
      background: #fff;
      margin: 0 24px;
      padding: 24px;
      width: 100%;
      @media (max-width: 767px) {
        margin-left: 0;
        padding: 16px;
        gap: 0;
      }
  `
  const buttons = css`
      display: flex;
      justify-content: center;
      gap: 24px;
      z-index: 2;
  `

  const prevStyle = css`
      background-color: transparent;
      cursor: pointer;
      outline: none;
      padding: 0;
      appearance: none;
      width: 0;
      height: 0;
      border-style: solid;
      border-top: 16px solid transparent;
      border-bottom: 16px solid transparent;
      border-left: 0;
      border-right: ${currentVolume === 0 ? '28px solid #C5C5C5' : '28px solid #ffb000'};
    `;
  const nextStyle = css`
      background-color: transparent;
      cursor: pointer;
      outline: none;
      padding: 0;
      appearance: none;
      width: 0;
      height: 0;
      border-style: solid;
      border-top: 16px solid transparent;
      border-bottom: 16px solid transparent;
      border-left: 28px solid #ffb000;
      border-left: ${currentVolume === Kakarot.length - 1 ? "28px solid #C5C5C5" : "28px solid #ffb000"};
      border-right: 0;
  `;
  const kakarotImg = css`
      width: 40%;
      height: auto;
      max-width: 500px;
      margin-top: 3rem;
      @media (max-width: 767px) {
        width: 100%;
        margin-top: 2rem;
        padding: 0 16px;
        box-sizing: border-box;
      }
  `
  const h2 = css`
      font-size: 1.4rem;
      margin: 0;
      @media (max-width: 767px) {
        font-size: 1.2rem;
      }
  `
  const h2wrap = css`
      display: flex;
      justify-content: space-between;
      align-items: center;

  `
  const informationInner = css`
    display: flex;
    gap: 24px;
    @media (max-width: 767px) {
        flex-direction: column;
      }
  `
  const informationText = css`
      font-size: 1.2rem;
      line-height: 1.5;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        font-size: 1rem;
        gap: 16px;
      }
  `
  const reference = css`
      font-size: 1rem;
      line-height: 1.5;
  `
  const referenceCharacter = css`
      display: flex;
      gap: 16px;
  `
  return (
    <>
      <main>
        <div css={mainInner}>
          <div css={information}>
            <div>
              <div>
                <div css={informationInner}>
                  <img css={kakarotImg} src={imgSrc} alt="悟空" />
                  <div css={informationText}>
                    <div css={h2wrap}>
                      <h2 css={h2}>{Kakarot[currentVolume].title}</h2>
                      <div css={buttons}>
                        <button css={prevStyle} onClick={prev}></button>
                        <button css={nextStyle} onClick={next}></button>
                      </div>
                    </div>
                    {Kakarot[currentVolume].description}
                    <p css={reference}>
                      戦闘力 参考値 <br />
                      <span css={referenceCharacter}><span>{Kakarot[currentVolume].reference[0]}</span><span>{Kakarot[currentVolume].reference.length === 2 ? Kakarot[currentVolume].reference[1] : ""}</span></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CombatPower currentVolume={currentVolume} setCurrentVolume={setCurrentVolume} />
        </div>
      </main>
    </>
  );
}
export default Main;
