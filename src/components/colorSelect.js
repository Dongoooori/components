import { Box, Button } from '@mui/material'
import Pickr from '@simonwep/pickr';
import React, { useEffect, useState } from 'react'

export default function ColorSelect() {
    const [colorSelect, setColorSelect] = useState(false);

    const pickr = Pickr.create({
        el: '.color-picker',
        theme: 'classic', // or 'monolith', or 'nano'
    
        swatches: [
            'rgba(244, 67, 54, 1)',
            'rgba(233, 30, 99, 0.95)',
            'rgba(156, 39, 176, 0.9)',
            'rgba(103, 58, 183, 0.85)',
            'rgba(63, 81, 181, 0.8)',
            'rgba(33, 150, 243, 0.75)',
            'rgba(3, 169, 244, 0.7)',
            'rgba(0, 188, 212, 0.7)',
            'rgba(0, 150, 136, 0.75)',
            'rgba(76, 175, 80, 0.8)',
            'rgba(139, 195, 74, 0.85)',
            'rgba(205, 220, 57, 0.9)',
            'rgba(255, 235, 59, 0.95)',
            'rgba(255, 193, 7, 1)'
        ],
    
        components: {
    
            // Main components
            preview: true,
            opacity: true,
            hue: true,
    
            // Input / output Options
            interaction: {
                hex: true,
                rgba: true,
                hsla: true,
                hsva: true,
                cmyk: true,
                input: true,
                clear: true,
                save: true
            }
        }
    });
    
    const handleColorSelect =() => {
        setColorSelect(true);
    }
    useEffect(() => {
        if(colorSelect) {
            handleColorSelect();
            setColorSelect(false);
        }
    },[colorSelect])

    console.log("rebase practice")

    console.log("lkmmm")
    console.log("lkmmm")
    

  return (
    <>
    <div>colorSelect</div>
    <Box sx={{width: "100px", height:"100px", border:"1px solid black"}}></Box>
    <Button variant='contained' sx={{width:"100px", fontSize:"11px", padding:"4px"}} onClick={handleColorSelect}>색깔 집어넣기</Button>
    </>
  )
}
