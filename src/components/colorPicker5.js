
import React from 'react';
import ColorPicker from 'react-best-gradient-color-picker';
import Draggable from 'react-draggable';

export default function ColorPicker5() {
  return (
    <div>
      <Draggable handle=".modal-header">
        <div className="modal-header">
          <ColorPicker />
        </div>
        <div>
          <div>
            yes
          </div>
        </div>
      </Draggable>
    </div>
  );
}
