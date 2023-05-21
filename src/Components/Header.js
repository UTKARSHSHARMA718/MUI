import React from "react";
import {
  Toolbar,
  IconButton,
  Badge,
} from "@mui/material";
import { Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Blogging Website</Typography>
        <IconButton>
          <Badge color="secondary" badgeContent={7}>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </>
  );
};

export default Header;
