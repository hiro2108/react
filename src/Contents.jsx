/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import { Kakarot } from "./compornents/Kakarot";
import Main from "./Main";

function Contents({ currentVolume, setCurrentVolume }) {
    const changeCurrentVolume = (index) => {
        setCurrentVolume(index);
    }
    const contents = css`
        display: flex;
        position: relative;
        align-items: center;
        min-width: 50%;
        margin-right: 36px;
        @media (max-width: 767px) {
            width: 100%;
            transform: translateX(8px);
    }
    `;
    const line = css`
        display: block;
        width: 100%;
        height: 8px;
        background: #ff0000;
    `;
    const unit=css`
        @media (max-width: 767px) {
            display: none;
    }
    `

    return (
        <>
            <div css={contents} className="contents">
                <span css={line}></span>
                {Kakarot.map((item, index) => {
                    const volume = css`
                        position: absolute;
                        width: 16px;
                        height: 16px;
                        border: solid 4px #ff0000;
                        cursor: pointer;
                        border-radius: 16px;
                        background-color: ${index === currentVolume ? '#ff0000' : '#FFB000'};
                        left: ${item.volume !== 1 ? `${((item.volume / 27) * 100)}%` : "0"};
                        @media (max-width: 767px) {
                            width: 8px;
                            height: 8px;
                        }
                    `;
                    return <span key={index} css={volume} onClick={() => changeCurrentVolume(index)}></span>
                })}
                {Kakarot.map((item, index) => {
                    const volume = css`
                        position: absolute;
                        transform: translateY(-24px);
                        left: ${item.volume !== 1 ? `${((item.volume / 27) * 100)}%` : "0"};
                        @media (max-width: 767px) {
                            width: 8px;
                            transform: translate(2px,-16px);
                        }
                    `;
                    return <span key={index} css={volume}>{item.volume}<span css={unit}>巻</span></span>
                })}
            </div>
        </>
    );
}
export default Contents;
