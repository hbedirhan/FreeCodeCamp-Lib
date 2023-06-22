import React, { useRef, useEffect } from 'react'
import { audio } from '../assets/audio';

function Pad({ bank, power, activeKey, setActiveKey, volume }) {

    const audioPlayers = {
        Q: useRef(),
        W: useRef(),
        E: useRef(),
        A: useRef(),
        S: useRef(),
        D: useRef(),
        Z: useRef(),
        X: useRef(),
        C: useRef()
      };

      const togglePlay = (key) => {
        const audioPlayer = audioPlayers[key].current;
        audioPlayer.currentTime = 0;
        audioPlayer.volume = volume;
        audioPlayer.play()
      };

      useEffect(() => {
        const handleKeyDown = (event) => {
          const key = event.key.toUpperCase();
          setActiveKey(key);
          if (audioPlayers[key] && audioPlayers[key].current) {
            audioPlayers[key].current.currentTime = 0;
            audioPlayers[key].current.volume = volume;
            audioPlayers[key].current.play();
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        setTimeout(() => {
            toggleKey(null);
        }, 150);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [audioPlayers]);

      const toggleKey = (key) => {
        setActiveKey(key);
      }

  return (
    <div className='pad-bank'>
        <div 
            className={`drum-pad ${activeKey === 'Q' ? power ? 'active' : 'inactive' : ''}`}
            tabIndex={0} 
            onClick={() => 
                {togglePlay('Q');
                toggleKey('Q');
                }}>
            <audio src={power ? bank ? audio.SmoothPianoKit.Q.link : audio.HeaterKit.Q.link : ''} ref={audioPlayers.Q} id='Q'></audio>
            Q
        </div>
        <div
            className={`drum-pad ${activeKey === 'W' ? power ? 'active' : 'inactive' : ''}`}
            tabIndex={0}
            onClick={() => 
                {togglePlay('W');
                toggleKey('W');
                }}>
            <audio src={power ? bank ? audio.SmoothPianoKit.W.link : audio.HeaterKit.W.link : ''} ref={audioPlayers.W} id='W'></audio>
            W
        </div>
        <div
            className={`drum-pad ${activeKey === 'E' ? power ? 'active' : 'inactive' : ''}`}
            tabIndex={0}
            onClick={() => 
                {togglePlay('E');
                toggleKey('E');
                }}>
            <audio src={power ? bank ? audio.SmoothPianoKit.E.link : audio.HeaterKit.E.link : ''} ref={audioPlayers.E} id='E'></audio>
            E
        </div>
        <div
            className={`drum-pad ${activeKey === 'A' ? power ? 'active' : 'inactive' : ''}`}
            tabIndex={0}
            onClick={() => 
                {togglePlay('A');
                toggleKey('A');
                }}>
            <audio src={power ? bank ? audio.SmoothPianoKit.A.link : audio.HeaterKit.A.link : ''} ref={audioPlayers.A} id='A'></audio>
            A
        </div>
        <div
            className={`drum-pad ${activeKey === 'S' ? power ? 'active' : 'inactive' : ''}`}
            tabIndex={0}
            onClick={() => 
                {togglePlay('S');
                toggleKey('S');
                }}>
            <audio src={power ? bank ? audio.SmoothPianoKit.S.link : audio.HeaterKit.S.link : ''} ref={audioPlayers.S} id='S'></audio>
            S
        </div>
        <div
            className={`drum-pad ${activeKey === 'D' ? power ? 'active' : 'inactive' : ''}`}
            tabIndex={0}
            onClick={() => 
                {togglePlay('D');
                toggleKey('D');
                }}>
            <audio src={power ? bank ? audio.SmoothPianoKit.D.link : audio.HeaterKit.D.link : ''} ref={audioPlayers.D} id='D'></audio>
            D
        </div>
        <div
            className={`drum-pad ${activeKey === 'Z' ? power ? 'active' : 'inactive' : ''}`}
            tabIndex={0}
            onClick={() => 
                {togglePlay('Z');
                toggleKey('Z');
                }}>
            <audio src={power ? bank ? audio.SmoothPianoKit.Z.link : audio.HeaterKit.Z.link : ''} ref={audioPlayers.Z} id='Z'></audio>
            Z
        </div>
        <div
            className={`drum-pad ${activeKey === 'X' ? power ? 'active' : 'inactive' : ''}`}
            tabIndex={0}
            onClick={() => 
                {togglePlay('X');
                toggleKey('X');
                }}>
            <audio src={power ? bank ? audio.SmoothPianoKit.X.link : audio.HeaterKit.X.link : ''} ref={audioPlayers.X} id='X'></audio>
            X
        </div>
        <div
            className={`drum-pad ${activeKey === 'C' ? power ? 'active' : 'inactive' : ''}`}
            tabIndex={0}
            onClick={() => 
                {togglePlay('C');
                toggleKey('C');
                }}>
            <audio src={power ? bank ? audio.SmoothPianoKit.C.link : audio.HeaterKit.C.link : ''} ref={audioPlayers.C} id='C'></audio>
            C
        </div>
    </div>
  )
}

export default Pad