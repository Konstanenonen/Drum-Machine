/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

export default function DrumPad(props) {
  React.useEffect(() => {
    function playWithKeyboard(event) {
      if (event.key === props.value || event.key === props.value.toLowerCase()) {
        props.playDrumPad();
      }
    }
    document.addEventListener('keypress', playWithKeyboard);
  }, []);

  return (
    <button
      type="button"
      onClick={props.playDrumPad}
      id={props.drumId}
      className="drum-pad"
    >
      {props.value}
      <audio
        id={props.value}
        src={props.src}
        className="clip"
      />
    </button>
  );
}
