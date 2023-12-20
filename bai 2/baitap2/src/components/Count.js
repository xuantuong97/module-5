import React, { useState } from 'react';

function Counter(){
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);

    const handleClick1 = (addAmount) => {
        const newValue = count1 + addAmount;
        setCount1(newValue);
    };
    const handleClick2 = (addAmount) => {
        const newValue = count2 + addAmount;
        setCount2(newValue);
    };

    return (
        <div>
            Count: {count1}
            <div>
                <button onClick={() => handleClick1(1)}>Add 1</button>
            </div>
            Count: {count2}
            <div>
                <button onClick={() => handleClick2(1)}>Add 2</button>
            </div>
        </div>
    );

}
export default Counter;
