/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import { Kakarot } from "./compornents/Kakarot";
import Main from "./Main";

function Reaction({ currentVolume, setCurrentVolume }) {
    const imgSrc = `../../reaction/reaction${currentVolume}.jpg`;

    const imgRef = useRef(null);
    const [bottom, setBottom] = useState(0);
    const [opacity, setOpacity] = useState(0);
    const [transition, setTransition] = useState('bottom 1s');
    const [imgWrapClose, setImgWrapClose] = useState({ opacity: 1 });

    useEffect(() => {
        setBottom(-imgRef.current.offsetHeight);
    }, []);

    useEffect(() => {
        setTransition('none');
        setOpacity(0);
        setBottom(-imgRef.current.offsetHeight);
        setTimeout(() => {
            setOpacity(1);
            setBottom(8);
            setTransition('bottom 1s');
        }, 1000);
    }, [currentVolume]);

    const close = () => {
        console.log("success");
        setImgWrapClose({ opacity: 0 });
    };
    useEffect(() => {
        setImgWrapClose({ opacity: 1 });
    }, [currentVolume]);
    
    const imgWrap = css`
        position: fixed;
        right: 10%;
        bottom: ${bottom}px;
        width: auto;
        height: 300px;
        transition: ${transition};
        opacity: ${imgWrapClose.opacity};
        @media (max-width: 767px) {
            position: static;
            width: 100%;
            height: auto;
            padding-top: 24px;
        }
    `;
    const img = css`
        width: auto;
        height: 100%;
        @media (max-width: 767px) {
            box-sizing: border-box;
            width: 100%;
            padding: 0 16px;
            height: auto;
        }
    `;
    const closedButton = css`
        font-size: 2rem;
        position: absolute;
        top: -4px;
        right: -4px;
        border: none;
        cursor: pointer;
        background: rgba(0,0,0,.5);
        outline: none;
        color: #fff;
        @media (max-width: 767px) {
            display: none;
        }
    `

    return (
        <>
            <div css={imgWrap} className="imgWrap">
                <img ref={imgRef} src={imgSrc} css={img} />
                <button css={closedButton} onClick={close}>×</button>
            </div>
        </>
    );
}
export default Reaction;
