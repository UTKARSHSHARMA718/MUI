import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText,
  Checkbox,
  FormGroup
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const CheckBoxContainer = () => {
  const [skills, setSkills] = useState(false);
  const [currentSkills, setCurrentSkills] = useState([]);
  const onHandleSelectSkills = (event) => {
    //in case of checkboxes we get 'checked' property instead of 'value'
    setSkills(event.target.checked);
  };
  const onHandleCurrentSkillsSelection = (skill) => {
    if (currentSkills.includes(skill)) {
      setCurrentSkills(
        currentSkills.filter((currSkill) => {
          return currSkill !== skill;
        })
      );
      return;
    }

    setCurrentSkills([...currentSkills, skill]);
  };
  return (
    <>
      <Box width="300px">
        <FormControlLabel
          label="Terms and conditions"
          control={
            <Checkbox
              size="medium"
              color="success"
              checked={skills}
              onChange={onHandleSelectSkills}
            />
          }
        />
      </Box>
      <Box width="300px">
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={skills}
          onChange={onHandleSelectSkills}
        />
      </Box>

      <Box width="300px">
        <FormControl>
          <FormLabel>Your Current Skills:</FormLabel>

          <FormGroup>
            <FormControlLabel
              label="Html"
              control={
                <Checkbox
                  size="medium"
                  color="primary"
                  checked={currentSkills.includes("html")}
                  onChange={() => onHandleCurrentSkillsSelection("html")}
                />
              }
            />

            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  size="medium"
                  color="primary"
                  checked={currentSkills.includes("css")}
                  onChange={() => onHandleCurrentSkillsSelection("css")}
                />
              }
            />

            <FormControlLabel
              label="javascript"
              control={
                <Checkbox
                  size="medium"
                  color="primary"
                  checked={currentSkills.includes("javascript")}
                  onChange={() => onHandleCurrentSkillsSelection("javascript")}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default CheckBoxContainer;
