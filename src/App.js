import logo from "./logo.svg";
import "./App.css";
import Typograhy from "@mui/material/Typography";
import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import { useState } from "react";

function App() {
  
  return (
    <div className="App">
            
      <Typograhy variant="h1" component="div" gutterBottom>
        hello world1
      </Typograhy>
      <Typograhy variant="h1" component="div">
        hello world2
      </Typograhy>
      <Stack
        variant="text"
        spacing={1}
        mt={5}
        mr={15}
        ml={15}
        direction="row"
        justifyContent="space-between"
      >
        <Button variant="text">text</Button>
        <Button variant="contained" endIcon={<FacebookIcon/>}>Contained</Button>
        <Button endIcon={<FacebookIcon />}>Contained</Button>
        <Button startIcon={<FacebookIcon />}>outlined</Button>
        <IconButton color="success" size="large" aria-label="send">
          <FacebookIcon />
          <FacebookIcon />
          <FacebookIcon />
          <FacebookIcon />
        </IconButton>
      </Stack>

      <ButtonGroup orientation="vertical" size='large' color="success" variant="contained">
        <Button>Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
      </ButtonGroup>



    </div>
  );
}

export default App;
