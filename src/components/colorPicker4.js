import React, { useRef, useState, useEffect } from 'react';
import Draggable from 'react-draggable'; // react-draggable 라이브러리 추가
import ColorPicker from '@thednp/color-picker';
import { Box } from '@mui/material';

export default function ColorPickerPalette2() {
  const paletteRef = useRef(null);
  const modalRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#FFFFFF'); // 기본 색상은 흰색

  console.log(isModalOpen)

  useEffect(() => {
    if (!isModalOpen || !paletteRef.current) {
      return;
    }

    const colorPalette = new ColorPicker.ColorPalette(8, 10);
    const paletteContainer = paletteRef.current;
    paletteContainer.innerHTML = '';
    paletteContainer.style.display = 'grid';
    paletteContainer.style.gridTemplateColumns = 'repeat(10, 30px)';
    paletteContainer.style.gap = '1px';

    colorPalette.colors.forEach((color) => {
      const colorDiv = document.createElement('div');
      colorDiv.style.backgroundColor = color.toRgbString();
      colorDiv.style.width = '30px';
      colorDiv.style.height = '30px';

      // 클릭 이벤트 추가: 색상을 선택하면 setSelectedColor를 호출하여 선택한 색상을 업데이트합니다.
      colorDiv.addEventListener('click', () => {
        const hexColor = color.toHexString(); // 선택한 색상의 HEX 값 가져오기
        setSelectedColor(hexColor);
        console.log(`Selected Color HEX: ${hexColor}`);
        console.log(`Selected Color HEX10: ${parseInt(hexColor.slice(1), 16)}`);
      });

      paletteContainer.appendChild(colorDiv);
    });
  }, [isModalOpen]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  const handleCustomPalette = () => {
    // 여기에서 DATA API를 통해 사용자 지정 색상 팔레트를 가져오고 팝업에 적용합니다.
    // 예를 들어, API 호출 후 색상 정보를 받아오고 그 정보를 사용하여 팔레트를 업데이트할 수 있습니다.
    // 팔레트 업데이트 로직 추가
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeModal);
    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, []);

  return (
    <div>
      <Box
        sx={{
          border: '1px solid black',
          width: '100px',
          height: '100px',
          backgroundColor: selectedColor, // 선택한 색상을 Box의 배경색으로 지정합니다.
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      </Box>
      <button onClick={toggleModal}>Toggle Color Palette</button>
      {isModalOpen && (
        <Draggable handle=".modal-header">
          <div className="modal" ref={modalRef} style={{ backgroundColor: 'gray', width: '310px', height: '289px' }}>
            <div className="modal-header">
              <h3>Draggable Color Palette</h3>
            </div>
            <div className="modal-content" ref={paletteRef} />
            <button onClick={handleCustomPalette}>사용자 설정</button>
          </div>
        </Draggable>
      )}
    </div>
  );
}
