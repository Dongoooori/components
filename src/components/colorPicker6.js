import React, { useState } from 'react';
import ColorPicker from '@rc-component/color-picker';

const ColorPicker6 = () => {
  const [color, setColor] = useState("#ffffff");
  const [showPicker, setShowPicker] = useState(false);

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
    setShowPicker(false); // 컬러 선택 후 컬러 피커 숨기기
  };
  console.log("tlklken")

  return (
    <div style={{ padding: '20px' }}>
      <h2>Color Picker Example</h2>
      <button onClick={() => setShowPicker(show => !show)}>
        Choose Color
      </button>
      {showPicker && (
        <ColorPicker
          color={color}
          onChange={handleColorChange}
        />
      )}
      <p>Selected Color: {color}</p>
    </div>
  );
};

export default ColorPicker6;
