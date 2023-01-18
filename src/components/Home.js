import React from "react";
import Navbar from "./Navbar";
// import { styled } from '@mui/system';
import { styled } from '@mui/material/styles';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Container, Grid, IconButton, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';


const Background = styled('div')({
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/the-games-bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
});
const Title = styled('h1')({
    padding: "0px",
    margin: "0px",
    fontFamily: 'monospace',
    color: 'white',
    fontSize: 50,
});
const MediumTitle = styled('h3')({
    padding: "0px",
    margin: "0px",
    fontFamily: 'monospace',
    color: 'white',
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import Grid from "@mui/material/Grid";
import britishImage from "../assets/british.jpeg";
import nostalgicImage from "../assets/nostalgic.jpeg";
import farcryImage from "../assets/farcry.jpeg";
import nostalgic2Image from "../assets/nostalgic2.jpeg";
import suicideImage from "../assets/suicide.jpeg";
import wiiuImage from "../assets/wiiu.gif";

function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1>Main Game Impian</h1>
        <h1>Sampai Pingsan</h1>
        <br />
        <div>
          <Grid container columns={12}>
            <Grid
              container
              item
              xs={4}
              alignItems="center"
              justifyContent="center"
            >
              <div>
                <Card sx={{ maxWidth: 400 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="420"
                      image={britishImage}
                      alt="british image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        British Women
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Play
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid
              container
              item
              xs={4}
              alignItems="center"
              justifyContent="center"
            >
              <div className="">
                <Card sx={{ maxWidth: 400 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="420"
                      image={nostalgicImage}
                      alt="nostalgic"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Nostalgic
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Play
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid
              container
              item
              xs={4}
              alignItems="center"
              justifyContent="center"
            >
              <div className="">
                <Card sx={{ maxWidth: 400 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="420"
                      image={farcryImage}
                      alt="far cry"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Far Cry 4
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Play
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
          </Grid>

          <br />
          <br />

          <Grid container columns={12}>
            <Grid
              container
              item
              xs={4}
              alignItems="center"
              justifyContent="center"
            >
              <div>
                <Card sx={{ maxWidth: 400 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="420"
                      image={nostalgic2Image}
                      alt="nostalgic2"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Nostalgic 2
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Play
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid
              container
              item
              xs={4}
              alignItems="center"
              justifyContent="center"
            >
              <div className="">
                <Card sx={{ maxWidth: 400 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="420"
                      image={suicideImage}
                      alt="suicide"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lollipop Chainsaw
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Play
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid
              container
              item
              xs={4}
              alignItems="center"
              justifyContent="center"
            >
              <div className="">
                <Card sx={{ maxWidth: 400 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="420"
                      image={wiiuImage}
                      alt="wiiu"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Wiii UUU
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Play
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
          </Grid>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Home;
