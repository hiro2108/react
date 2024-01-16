import React, { useState } from "react";
import Main from './Main'
import Contents from "./Contents";

const Mycontext = React.createContext();

function CurrentVolume() {
    const [currentVolume, setCurrentVolume] = useState(1);
    console.log(currentVolume);
    return (
        <>
            <Main currentVolume={currentVolume} />
            <Contents currentVolume={currentVolume} />
        </>
    );
};
export default CurrentVolume;
