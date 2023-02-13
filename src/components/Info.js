import React from "react";
import Navbar from "./Navbar";
import "./styleHome.css";


import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import {Paper} from "@mui/material";
import {Box}  from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';



import Grid from "@mui/material/Grid";
import britishImage from "../assets/british.jpeg";
import rockpaperstrategy from "../assets/rockpaperstrategy-1600.jpg";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));

// const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

function Info() {
  return (
    <div>
      <Navbar />
      
      <div style={{ textAlign: "center" }} className="homeText">
        <div>Info Game</div>
        </div>
        <div>
            
          <Grid container columns={12}>
            <Grid
              container
              item
              xs={6}
              alignItems="center"
              justifyContent="end"
            >
              <div>
                <Card sx={{ maxWidth: 375 }}>
                  
                    <CardMedia
                      component="img"
                      height="420"
                      image={britishImage}
                      alt="british image"
                    />
                 
                </Card>
              </div>
            </Grid>
            <Grid
              container
              item
              xs={6}
              textAlign="justify"
              justifyContent="start"
              
            >
              <div>
                <Card sx={{ maxWidth: 750 }} >
                
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" fontWeight={1000}>
                        Rock Paper Scissor
                      </Typography>
                      <Typography variant="body1" color="text.primer" fontWeight={1000}>
                        Skor Toral : 285 <br />
                        Ronde Sekarang: 5 <br />
                        Status        : Win <br /><br />
                        Ronde Sebelumnya: <br />
                        Ronde 4: Win <br />
                        ROnde 3: Lose <br />
                        Ronde 2: Lose <br />
                        Ronde 1: Win 

                      </Typography>
                    </CardContent>
                 
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

export default Info;
