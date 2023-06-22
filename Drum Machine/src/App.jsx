import { useState } from 'react';
import './App.css'
import Controls from './components/Controls'
import Pad from './components/Pad'

function App() {

  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(false);
  const [display, setDisplay] = useState('');
  const [activeKey, setActiveKey] = useState('');
  const [volume, setVolume] = useState(1);

  return (
    <>
      <div className='inner-container' id='drum-machine'>
        <Pad
          bank={bank}
          power={power}
          activeKey={activeKey}
          setActiveKey={setActiveKey}
          volume={volume}

        />
        <Controls
          power={power}
          setPower={setPower}
          bank={bank}
          setBank={setBank}
          display={display}
          setDisplay={setDisplay}
          activeKey={activeKey}
          setVolume={setVolume}
          volume={volume}
          />
      </div>
    </>
  )
}

export default App
