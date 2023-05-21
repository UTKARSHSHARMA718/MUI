import React, { useState } from 'react'
import {Box, Switch, FormControlLabel} from '@mui/material';

const SwitchComponent = () => {
    const [mode,SetMode] = useState('Light mode');
    const onHandleSelectMode = () => {
        SetMode(mode === 'Light mode' ? 'Dark mode':'Light mode');
    }
  return (
    <>
        <Box>
            <FormControlLabel 
                label={mode}
                control={<Switch checked={mode === 'Dark mode'} onChange={onHandleSelectMode}/>}
            />
        </Box>
    </>
  )
}

export default SwitchComponent