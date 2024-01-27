import { Box, Button } from "@mui/material";
import { useState } from "react";
import ColorPicker from 'react-pick-color';

export default function ColorSelect1() {
    const [color, setColor] = useState('#fff');
    const [showColorPicker, setShowColorPicker] = useState(false);

    const handleButtonClick = () => {
        setShowColorPicker(!showColorPicker);
    };

    return (
        <>
            <div>react-color-picker</div>
            <Box sx={{width: "100px", height:"100px", border:"1px solid black", bgcolor: color}}></Box>
            <Button 
                variant='contained' 
                sx={{width:"100px", fontSize:"11px", padding:"4px"}} 
                onClick={handleButtonClick}
            >
                색깔 집어넣기
            </Button>
            {showColorPicker && (
                <ColorPicker 
                  color={color} 
                  onChange={color => setColor(color.hex)} 
                  theme={{
                    background:'lightgrey',
                    borderColor:'darkgrey',
                    borderRadius:'8px',
                    color:'black',
                    width:'320px'
                  }}
                />
            )}
            
        </>
    )
}