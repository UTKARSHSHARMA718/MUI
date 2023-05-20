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
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import { useState } from "react";

function App() {
  const [format, setFormat] = useState([]);
  const onHandleChange = (event, selectedItems) => {
    // both the parameters are by default given by the MUI component ToggleButtonGroup
    console.log(selectedItems);
    setFormat(selectedItems);
  };
  return (
    <div className="App">
      <ToggleButtonGroup
        color="success"
        onChange={onHandleChange}
        value={format}
        sx={{ mt: 100 }}
      >
        {/* NOTE: value property is mandatory for all the elements inside the toggleButton, it is used to identify the item uniquely*/}
        <ToggleButton value="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italics">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underline">
          <FormatColorTextIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default App;
