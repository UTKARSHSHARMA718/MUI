import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  makeStyles,
} from "@mui/material";

const useStyles = makeStyles({
  title: {
    fontSize: 40,
    fontFamily: "Montserrat",
  },
  cover:{
    backgroundImage:url('https://images.unsplash.com/photo-1684487747385-442d674962f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'),
    backgroundPosition:'center',
    padding:"35px 25px",
  }
});
const FeaturedPost = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.cover}>
        <CardContent className={classes.textContainer}>
          <Typography className={classes.title} gutterBottom>
            Lorem ipsum dolor sit amet, consectetur
          </Typography>
          <Typography variant="h5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            soluta et exercitationem nihil facere alias ratione quod iste.
          </Typography>
        </CardContent>

        <CardActions>
          <Button className={classes.btn}>READ MORE...</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default FeaturedPost;
