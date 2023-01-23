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
import rockpaperstrategy from "../assets/rockpaperstrategy-1600.jpg";



function Detail() {
  return (
    <div>
      <Navbar />
      
      <div style={{ textAlign: "center" }} className="homeText">
        <div>Detail Game</div>
        </div>
        <div>
            
          <Grid container columns={12}>
            <Grid
              container
              item
              xs={7}
              alignItems="center"
              justifyContent="center"
            >
              <div>
                <Card sx={{ maxWidth: 750 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="420"
                      image={rockpaperstrategy}
                      alt="british image"
                    />
                  </CardActionArea>
                </Card>
              </div>
            </Grid>
            <Grid
              container
              item
              xs={5}
              textAlign="justify"
              justifyContent="start"
            >
              <div>
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                        Rock Paper Scissor
                      </Typography>
                      <Typography variant="body1" color="text.primer">
                        Gunting Batu Kertas (Rock Paper Scissors) adalah permainan sederhana dimana dua atau lebih pemain
                        menggunakan tangan mereka untuk menghasilkan bentuk atau gestur secara bersamaan.
                        Dalam permainan ini, ada tiga gestur yang dapat dipilih, yaitu gunting, batu, dan kertas.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </Grid>
            
          </Grid>

          <br />
          <br />

          <br />
        </div>
      
    </div>
  );
}

export default Detail;
