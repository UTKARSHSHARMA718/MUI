import logo from "./logo.svg";
import "./App.css";
import {Box,TextField,MenuItem, autocompleteClasses} from '@mui/material';
import { useState } from "react";
function App() {
  const [contries,setCountries] = useState([]);
  const onHandleCountriesSelect = (event) => {
    // console.log(event);
    setCountries(event.target.value);
    // setCountries(event);
  }
  return (
    // Basic Drop down select menu
    <div className="App" style={{padding:'20% 40%'}} >
      <Box width="300px" mt={10}  >
        <TextField
          label='Select Your Country'
          select
          value={contries}
          onChange={onHandleCountriesSelect}
          color="success"
          fullWidth
          helperText="Please select your country"
          SelectProps={{
            multiple:true,
          }}
        >
          {/* <MenuItem value ="IN" onClick={()=>onHandleCountriesSelect('IN')}>INDIA</MenuItem>
          <MenuItem value ="DU" onClick={()=>onHandleCountriesSelect('DU')}>DUBAI</MenuItem>
          <MenuItem value ="RU" onClick={()=>onHandleCountriesSelect('RU')}>RUSSIA</MenuItem>
          <MenuItem value ="US" onClick={()=>onHandleCountriesSelect('US')}>USA</MenuItem> */}

          <MenuItem value ="IN" >INDIA</MenuItem>
          <MenuItem value ="DU" >DUBAI</MenuItem>
          <MenuItem value ="RU" >RUSSIA</MenuItem>
          <MenuItem value ="US" >USA</MenuItem>
        </TextField>
      </Box>
    </div>
  );
}

export default App;
