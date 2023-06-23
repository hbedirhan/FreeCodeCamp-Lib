import React, { useEffect, useState } from 'react'

function Buttons({ input, setInput }) {
    const [result, setResult] = useState('');

    const handleClick = (e) => {
        if (result !== '') {
          setInput(e.target.value);
          setResult('');
        } else {
          setInput((prevInput) => prevInput + e.target.value);
        }
      };

    const clear = () => {
        setInput('');
    };


    const calculate = () => {
        try {
          const newResult = eval(input);
          setResult(String(newResult));
        } catch (error) {
          setResult('Error');
        }
      };

    useEffect(() => {
        setInput(result);
    }, [result]);


    return (
        <div>
            <button className="jumbo" id="clear" value="AC" style={{ background: "rgb(255,0,0)" }} onClick={clear}>AC</button>
            <button id="divide" value="/" style={{ background: "rgb(102, 102, 102)" }} onClick={handleClick}>/</button>
            <button id="multiply" value="*" style={{ background: "rgb(102, 102, 102)" }} onClick={handleClick}>x</button>
            <button id="seven" value="7" onClick={handleClick}>7</button>
            <button id="eight" value="8" onClick={handleClick}>8</button>
            <button id="nine" value="9" onClick={handleClick}>9</button>
            <button id="subtract" value="-" style={{ background: "rgb(102, 102, 102)" }} onClick={handleClick}>-</button>
            <button id="four" value="4" onClick={handleClick}>4</button>
            <button id="five" value="5" onClick={handleClick}>5</button>
            <button id="six" value="6" onClick={handleClick}>6</button>
            <button id="add" value="+" style={{ background: "rgb(102, 102, 102)" }} onClick={handleClick}>+</button>
            <button id="one" value="1" onClick={handleClick}>1</button>
            <button id="two" value="2" onClick={handleClick}>2</button>
            <button id="three" value="3" onClick={handleClick}>3</button>
            <button className="jumbo" id="zero" value="0" onClick={handleClick}>0</button>
            <button id="decimal" value="." onClick={handleClick}>.</button>
            <button id="equals" value="=" style={{ background: "rgb(255,165,0)", position: "absolute", height: "130px", bottom: "5px" }} onClick={calculate}>=</button>
        </div>
    )
}

export default Buttons