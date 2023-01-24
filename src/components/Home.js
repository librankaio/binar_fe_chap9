import React from "react";
import Navbar from "./Navbar";
import "./styleHome.css";

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
import marioImage from "../assets/mario.jpeg";
// import batuImage from "../assets/batu.png"
import guntingImage from "../assets/gunting.jpeg"

function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Grid
          container
          columns={12}
          alignItems="center"
          justifyContent="center"
        >
          <img src={marioImage} alt="mario" />
        </Grid>
      </div>
      <div style={{ textAlign: "center" }} className="homeText">
        <div>Main Game Impian</div>
      </div>
      <div>
        <div className="trendingGames">TRENDING GAMES</div>
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
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
                    image={guntingImage}
                    alt="batu"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Rock Paper Scissors
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
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

      {/* COMMUNITY SECTION */}
      <div>
        <div className="community">COMMUNITY</div>
        <div>
          <Grid container spacing={0} columns={16}>
            <Grid
              container
              item
              xs={3}
              alignItems="center"
              justifyContent="center"
            >
              <div>
                <Card sx={{ width: 250 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="210"
                      image={nostalgic2Image}
                      alt="nostalgic2"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Jakarta Gamers
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Gabung
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid
              container
              item
              xs={3}
              alignItems="center"
              justifyContent="center"
            >
              <div>
                <Card sx={{ width: 250 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="210"
                      image={nostalgic2Image}
                      alt="nostalgic2"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Solo Gamers
                      </Typography>

                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Gabung
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid
              container
              item
              xs={3}
              alignItems="center"
              justifyContent="center"
            >
              <div>
                <Card sx={{ width: 250 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="210"
                      image={nostalgic2Image}
                      alt="nostalgic2"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lamongan Gamers
                      </Typography>

                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Gabung
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
            <Grid
              container
              item
              xs={3}
              alignItems="center"
              justifyContent="center"
            >
              <div>
                <Card sx={{ width: 250 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="210"
                      image={nostalgic2Image}
                      alt="nostalgic2"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Blitar Gamers
                      </Typography>

                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Gabung
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </Grid>
          </Grid>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Home;
