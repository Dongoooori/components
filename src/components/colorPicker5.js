
import React, { useState } from 'react';
import ColorPicker from 'react-best-gradient-color-picker';
import Draggable from 'react-draggable';

export default function ColorPicker5() {
  const [background, setBackground] = useState('#fff'); // State to store the background color


  console.log("lknkene")
  console.log("lknkene")
  console.log("lknkene")
  console.log("lknkene")


  return (
    <div>
      <Draggable handle=".modal-header">
        <div className="modal-header">
          <ColorPicker />
        </div>
      </Draggable>
    </div>
  );
}
