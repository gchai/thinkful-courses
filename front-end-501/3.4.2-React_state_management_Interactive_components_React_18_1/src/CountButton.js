import React, { useState } from "react";

function CountButton () {
    const [clickNum, setClickNum] = useState(0)
    return(
        <button onClick={() => setClickNum(clickNum => clickNum + 1)}>
            Click Count: {clickNum}
        </button>
    )
}

export default CountButton;