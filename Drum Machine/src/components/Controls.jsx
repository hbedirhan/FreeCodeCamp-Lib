import React, { useEffect, } from 'react'
import { audio } from '../assets/audio';

function Controls({ power, setPower, bank, setBank, display, setDisplay, activeKey, volume, setVolume }) {
    

    const toggleStyle = (btn) => {
        if (btn === 'power') {
            setPower(!power);
        } else {
            setBank(!bank);
        }
    };

    useEffect(() => {
        if (power) {
            const selectedAudio = bank ? audio.HeaterKit[activeKey] : audio.SmoothPianoKit[activeKey]
            if (selectedAudio) {
                setDisplay(selectedAudio.title);
            }
        } else {
            setDisplay('');
        }
    }, [activeKey]);
    
    useEffect(() => {
        setDisplay('Volume: ' + Math.floor(volume * 100));
        setTimeout(() => {
            setDisplay('');
        }, 1000);
    }, [volume])


    return (
        <div className='controls-container'>
            <div className='control'>
                <p>Power</p>
                <div className='select' onClick={() => toggleStyle('power')}>
                    <div className='inner' style={{ float: power ? 'right' : 'left' }}></div>
                </div>
            </div>
            <p id='display'>{display}</p>
            <div className='volume-slider'>
                <input
                    max={1}
                    min={0}
                    step={0.01}
                    type="range"
                    control-id="ControlID-1"
                    value={volume} onChange={(e) => setVolume(e.target.value)}
                    disabled={!power}
                />
            </div>
            <div className='control'>
                <p>Bank</p>
                <div className='select' onClick={() => toggleStyle('bank')}>
                    <div className='inner' style={{ float: bank ? 'right' : 'left' }}></div>
                </div>
            </div>
        </div>
    )
}

export default Controls