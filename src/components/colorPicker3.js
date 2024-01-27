import React, { useRef, useState, useEffect } from 'react';
import ColorPicker from '@thednp/color-picker';

export default function ColorPickerPalette() {
  const paletteRef = useRef(null);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  useEffect(() => {
    const colorPalette = new ColorPicker.ColorPalette({
      hue: 0,
      hueSteps: 24,
      lightSteps: 10,
      saturation: 50,
    });

    console.log('Generated colors:', colorPalette.colors); 

    const paletteContainer = paletteRef.current;
    paletteContainer.innerHTML = '';
    paletteContainer.style.display = isPaletteOpen ? 'grid' : 'none';
    paletteContainer.style.gridTemplateColumns = 'repeat(10, 30px)';
    paletteContainer.style.gap = '1px';

    colorPalette.colors.forEach((color) => {
      const colorDiv = document.createElement('div');
      colorDiv.style.backgroundColor = color.toRgbString();
      colorDiv.style.width = '30px';
      colorDiv.style.height = '30px';
      paletteContainer.appendChild(colorDiv);
    });
  }, [ isPaletteOpen]);

  const togglePalette = () => {
    setIsPaletteOpen(!isPaletteOpen);
  };

  return (
    <div>
      <button onClick={togglePalette}>Toggle Color Palette</button>
      <div ref={paletteRef} />
    </div>
  );
}
