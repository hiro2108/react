/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { useEffect, useState } from "react";
import { Kakarot } from "./compornents/Kakarot";

const baseCompornentStyle = css`
    position: absolute;
    left: 0;
    top: -2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0 60px 60px 0;
    background: rgba(79,215,133,.7);
    width: 32%;
    margin: 0;
    padding: 24px 24px 24px 48px;
    @media (max-width: 767px) {
        top: -1%;
        gap: 0;
        border-radius: 0 32px 32px 0;
        padding: 16px;
        width: 90%;
    }
`
const combatPowerImgStyle = css`
    width: 100%;
    max-width: 500px;
    @media (max-width: 767px) {
        width: 80%;
    }
`
const combatPowerNumberStyle = css`
    text-align: center;
    color: #FFFF01;
    font-family: "DSEG7";
    font-size: 3rem;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    @media (max-width: 767px) {
        font-size: 28px;
    }
`;

// 点滅アニメーション
const blink = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
`;
function CombatPower({ currentVolume, setCurrentVolume }) {
    const [combatPower, setCombatPower] = useState(baseCompornentStyle);
    const [combatPowerImg, setCombatPowerImg] = useState(combatPowerImgStyle);
    const [combatPowerNumber, setCombatPowerNumber] = useState(combatPowerNumberStyle);

    // 戦闘力のカウントアップアニメーション
    const [displayedCombatPower, setDisplayedCombatPower] = useState(0);
    const [isBlinking, setIsBlinking] = useState(false);

    useEffect(() => {
        setDisplayedCombatPower(0);
        const targetCombatPower = Kakarot[currentVolume].combatPower;
        const increment = Math.ceil(targetCombatPower / 200);
        const intervalId = setInterval(() => {
            setDisplayedCombatPower((prevCombatPower) => {
                const newCombatPower = prevCombatPower + increment;
                if (newCombatPower < targetCombatPower) {
                    return newCombatPower;
                } else {
                    clearInterval(intervalId);
                    setIsBlinking(true);
                    return targetCombatPower;
                }
            });
        }, 1);
        return () =>
            clearInterval(intervalId);
    }, [currentVolume]);

    // スカウターの表示アニメーション
    useEffect(() => {
        if (isBlinking) {
            const timeoutId = setTimeout(() => {
                setIsBlinking(false);
                setCombatPower(css`
                    ${baseCompornentStyle};
                    background: transparent;
                `);
                setCombatPowerImg(css`
                    ${combatPowerImgStyle};
                    opacity: 0;
                `);
                setCombatPowerNumber(css`
                    ${combatPowerNumberStyle};
                    color: black;
                `);
            }, 2000);
            return () => clearTimeout(timeoutId);
        }
    }, [isBlinking]);
    useEffect(() => {
        // currentVolumeが変更されたときにスタイルを初期値に設定
        setCombatPower(baseCompornentStyle);
        setCombatPowerImg(combatPowerImgStyle);
        setCombatPowerNumber(combatPowerNumberStyle);
    }, [currentVolume]);

    return (
        <>
            <div css={combatPower}>
                <p css={css`
            ${combatPowerNumber};
            ${isBlinking && css`animation: ${blink} 0.4s step-end 3;`}
            `}>
                    {displayedCombatPower.toLocaleString()}</p>
                <img src="../../scouter.png" alt="スカウター" css={css`
                ${combatPowerImg};
                ${isBlinking && css`animation: ${blink} 0.4s step-end 3;`}
            `} />
            </div>
        </>
    );
}

export default CombatPower;
