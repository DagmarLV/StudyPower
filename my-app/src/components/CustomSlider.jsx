import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}


export default function DiscreteSlider({onChange}) {
  return (
    <Box sx={{ width: 400, color:"success" }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={50}
        step={10}
        marks
        min={10}
        max={100}
        color="principal"
        onChange={onChange}
      />
      
    </Box>
  );
}
