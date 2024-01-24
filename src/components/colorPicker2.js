import { Box, Button } from "@mui/material";
import { useEffect, useRef } from "react";
import ColorPicker from '@thednp/color-picker';
import { colorStyle } from "./colorPickerStyle";

const gridItemSize = "5.75vw";
const gridFit = 12; // 이 값은 상황에 따라 조정해야 할 수 있습니다.
const gridGap = "1vw";

const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(10, 20px)", // 10개의 컬럼, 각 컬럼 크기는 동일하게 1fr
    gridGap: "0.25vw", // 그리드 간격
    // 기타 스타일
  };

export default function ColorSelect2() {
    const colorBoxRef = useRef(null);
    const containerRef = useRef(null);
    const startRef = useRef(null);
    const hueRef = useRef(null);
    const hStepsRef = useRef(null);
    const lStepsRef = useRef(null);

    console.log("klljndslfknlknsdf")
    console.log("lknlkmkkfe")

    const generatePalette = (color) => {
        const container = containerRef.current;
        const start = startRef.current;
        const hue = hueRef.current;
        const hSteps = hStepsRef.current;
        const lSteps = lStepsRef.current;
        

        if (container && start && hue && hSteps && lSteps) {
            container.innerHTML = '';
            const startHue = start.value ? new ColorPicker.Color(start.value).toHsl().h : 0;
            if (startHue) hue.value = parseInt(startHue * 360);
            const [H, HS, LS] = [
                parseFloat(hue.value) || 0,
                parseFloat(hSteps.value) || 12,
                parseFloat(lSteps.value) || 10,
            ];
            const palette = new ColorPicker.ColorPalette(H, HS, LS);
            palette.colors.forEach(color => {
                const option = document.createElement('div');
                const isDark = new ColorPicker.Color(color).isDark;
                const textClass = isDark ? ' text-light' : ' text-dark';
                option.className = `color-option${textClass}`;
                option.innerText = color.toHexString();
                Object.assign(option.style, { backgroundColor: color.toHexString() });
                container.append(option);
            });
            document.body.style.setProperty('--grid-fit', LS);
            if (color) {
                const colorBox = colorBoxRef.current;
                if (colorBox) {
                    colorBox.style.backgroundColor = color; // 선택된 색상으로 컬러 박스의 배경색을 설정합니다.
                }
            }
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        const start = startRef.current;

        if (start) {
            start.addEventListener('input', generatePalette);
        }

        if (container) {
            container.addEventListener('click', function({target}) {
                if (target === container) return;
                const [active] = container.getElementsByClassName('active');
                if (target.innerText.includes('#')) {
                    const color = new ColorPicker.Color(target.innerText);
                    const clone = color.clone().spin(-180);
                    document.body.style.setProperty('--body-bg', target.innerText);
                    document.body.style.setProperty('--color', (color.isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)'));
                    document.body.style.setProperty('--heading-color', (color.isDark ? '#eee' : '#333'));
                    document.body.style.setProperty('--btn-bg-color', clone.lighten(color.brightness < 80 ? 35 : -15).toString());
        
                    if (active !== target) {
                        if (active) {
                            active.classList.remove('active');
                        }
                        target.classList.add('active');
                    }
                }
            }); 
        }

        return () => {
            if (start) {
                start.removeEventListener('input', generatePalette);
            }
            if (container) {
                container.removeEventListener('click', generatePalette); // 여기에 클릭 이벤트 리스너 제거 로직을 넣으세요.
            }
        };
    }, []);

    return (
        <>
        <div >
             <div style={containerStyle} ref={containerRef} className="color-grid"></div>
            <div ref={colorBoxRef} className="color-box"></div> {/* This is the color box */}
            <input ref={startRef} type="text" id="startColor" />
            <input ref={hueRef} type="text" id="hue" />
            <input ref={hStepsRef} type="text" id="hSteps" />
            <input ref={lStepsRef} type="text" id="lSteps" />
            <Button onClick={generatePalette}>Generate Palette</Button>
        </div>
        </>
    );
}
