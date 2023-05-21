import React from 'react'
import {Grid,Card,Hidden,CardActionArea, CardContent, Typography} from '@mui/material';

// NOTE if we want ripple in a card then we have to put that thinng
//inside the cardActionArea

const useStyles = makeStyles({
    card:{
        display:'flex'
    },
    cardDetails:{
        flex: 1,
    },
    cardMedia:{
        width:160,
    }
});

const PostCard = ({post}) => {
  const classes = useStyles();

  return (
    <>
        <Grid xs={12} md={6}>
            <CardActionArea component='a' href='#'>
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component='h2' variant='h5'>
                                {post.title}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                {post.date}
                            </Typography>
                            <Typography variant='subtitle1' paragraph>
                                {post.description}
                            </Typography>
                            <Typography variant='subtitle1' style={{color:'skyblue'}}>
                                Continue reading....
                            </Typography>
                        </CardContent>
                    </div>

                    <Hidden xsDown>
                        <CardMedia 
                            className={classes.cardMedia}
                            image={post.image}
                            title={post.imageTitle}
                        />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    </>
  )
}

export default PostCard