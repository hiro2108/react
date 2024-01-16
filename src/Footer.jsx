/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Footer() {
    const img = css`
        position: fixed;
        bottom: 0;
        left: 0;
        width: 96%;
        height: auto;
    `;
    return (
        <>
            <img src="../../footer_goku.png" css={img} />
        </>
    );
}
export default Footer;
