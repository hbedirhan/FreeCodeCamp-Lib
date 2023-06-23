import React from 'react'
import FormulaScreen from './FormulaScreen'
import OutputScreen from './OutputScreen'
import Buttons from './Buttons'

function Calculator() {
  return (
    <div className='calculator'>
        <FormulaScreen/>
        <OutputScreen/>
        <Buttons/>
    </div>
  )
}

export default Calculator