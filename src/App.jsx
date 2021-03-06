/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import DrumPad from './components/DrumPad';
import drumPadData from './drumPadData';

function App() {
  const [latestDrum, setLatestDrum] = React.useState('');

  function playDrumPad(value, id) {
    // This is done with document object because of freeCodeCamps tests
    // I would do this in different way with out the tests, because
    // document object shouldn't be used with React
    const audioToPlay = document.getElementById(value);
    audioToPlay.play();
    setLatestDrum(id);
  }

  const drumPads = drumPadData.map((drumData) => (
    <DrumPad
      drumId={drumData.id}
      playDrumPad={() => playDrumPad(drumData.value, drumData.id)}
      value={drumData.value}
      src={drumData.src}
      key={drumData.id}
      name={drumData.name}
    />
  ));

  return (
    <div className="App">
      <h1>Drum Machine</h1>
      <div id="drum-machine">
        <div id="display">
          <p>{latestDrum}</p>
        </div>
        <div className="drum-pads">
          {drumPads}
        </div>
      </div>
      <h2>Try using drum pads with the keyboard!</h2>
    </div>
  );
}

export default App;
