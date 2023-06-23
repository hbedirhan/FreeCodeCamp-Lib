import React, { useState } from 'react'
import FormulaScreen from './FormulaScreen'
import OutputScreen from './OutputScreen'
import Buttons from './Buttons'

function Calculator() {

    const [input, setInput] = useState('');

  return (
    <div className='calculator'>
        <FormulaScreen input={input}/>
        <OutputScreen input={input}/>
        <Buttons input={input} setInput={setInput}/>
    </div>
  )
}

export default Calculator