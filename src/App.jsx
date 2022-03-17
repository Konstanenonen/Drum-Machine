/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import DrumPad from './components/DrumPad';
import drumPadData from './drumPadData';

function App() {
  function playDrumPad(value) {
    // This is done with document object because of freeCodeCamps tests
    // I would do this in different way with out the tests, because
    // document object shouldn't be used with React
    const audioToPlay = document.getElementById(value);
    audioToPlay.play();
  }

  const drumPads = drumPadData.map((drumData) => (
    <DrumPad
      drumId={drumData.id}
      playDrumPad={() => playDrumPad(drumData.value)}
      value={drumData.value}
      src={drumData.src}
      key={drumData.id}
    />
  ));

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display" />
        <div className="drum-pads">
          {drumPads}
          {/* <button
            type="button"
            onClick={() => {
              const audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3');
              audio.play();
            }}
            id="1"
            className="drum-pad"
          >
            Q
            <audio id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" />
          </button>
          <div id="2" className="drum-pad">
            W
            <audio id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" />
          </div>
          <div id="3" className="drum-pad">
            E
            <audio id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" />
          </div>
          <div id="4" className="drum-pad">
            A
            <audio id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" />
          </div>
          <div id="5" className="drum-pad">
            S
            <audio id="S" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" />
          </div>
          <div id="6" className="drum-pad">
            D
            <audio id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" />
          </div>
          <div id="7" className="drum-pad">
            Z
            <audio id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" className="clip" />
          </div>
          <div id="8" className="drum-pad">
            X
            <audio id="X" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" className="clip" />
          </div>
          <div id="9" className="drum-pad">
            C
            <audio id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" className="clip" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
