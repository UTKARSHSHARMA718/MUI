import React from 'react'
import {Box,FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, FormHelperText} from '@mui/material';
const RadioMenu = () => {
  return (
    <Box width="500px">
        <FormControl>
            <FormLabel color='error'>
                Select your age Range:
            </FormLabel>
            <RadioGroup row>
                <FormControlLabel control={<Radio size='medium' color='error'  />} label="1 to 10" value="1 to 10"/>
                <FormControlLabel control={<Radio size='medium' color='primary'/>} label="11 to 20" value="11 to 20"/>
                <FormControlLabel control={<Radio size='medium' color='secondary'/>} label="21 to 30" value="21 to 30"/>
                <FormControlLabel control={<Radio size='medium' color='success' />} label="Above 30" value="Above 30"/>
            </RadioGroup>
            <FormHelperText >
                Please Select your correct age!
            </FormHelperText>
        </FormControl>
        
    </Box>
  )
}

export default RadioMenu