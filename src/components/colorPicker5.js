
import React from 'react';
import ColorPicker from 'react-best-gradient-color-picker';
import Draggable from 'react-draggable';

export default function ColorPicker5() {
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
