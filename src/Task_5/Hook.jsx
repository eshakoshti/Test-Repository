import { useEffect, useState } from "react";
import React from 'react'
function Hook() {
    const [count, setCount] = useState(0)
    const [add, setadd] = useState(0)
    useEffect(() => {
        setadd(count + 1)
    }, [count]);

    return (
        <>
            <div>

                {/* <button type="button" onClick={count}>Click Me</button> */}
                <button onClick={() => setCount((c) => count + 5)}> Addition</button>

                <h1>Addition value is:{add}</h1>

            </div>
        </>
    );
}
export default Hook