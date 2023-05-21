import React, { useState } from 'react'
import {Box,FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, FormHelperText, Rating} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RatingsContainer = () => {
    const [selected,setSelected] = useState(null);
    const [selectedImojie,setSelectedImojies] = useState(null);
    const onHandleRatingSelect = (event,starsSelected) => {
        // console.log(starsSelected);
        setSelected(starsSelected);
    }
    const onHandleRatingSelectImojie = (event,starsSelected) => {
        // console.log(starsSelected);
        setSelected(starsSelected);
    }
  return (
    <>
        <Box>
            <Rating 
                value={selected}
                onChange = {onHandleRatingSelect}
                precision = {0.5}
                size = "medium"
                icon = {<FavoriteIcon color='error' fontSize='18px'/>}
                emptyIcon={<FavoriteBorderIcon/>}
                highlightSelectedOnly
            />
            
        </Box>
    </>
  )
}

export default RatingsContainer