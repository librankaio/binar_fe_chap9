import React from "react";
import Navbar from "./Navbar";
import "./styleHome.css";


import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';

import Grid from "@mui/material/Grid";
import nostalgic2Image from "../assets/nostalgic2.jpeg"


let abc = "Joko Wagiman ";
let abc2 = [9999, 8888, 7777];

function Nostalgic2() {
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
                <Card sx={{ minWidth: 750 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="420"
                      image={nostalgic2Image}
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
                <Card sx={{ minWidth: 500 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        HighScore
                      </Typography>
                      <Typography variant="body1" color="text.primer">
                        <List
                          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                          aria-label="contacts"
                        >
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <StarIcon />
                              </ListItemIcon>
                              <ListItemText primary={[abc,' : ', abc2[0]]} />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemText inset primary={[abc,' : ', abc2[1]]} />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemText inset primary={[abc,' : ', abc2[2]]} />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div>
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Nostalgic 2
                      </Typography>
                      <Typography variant="body2" color="text.primer">
                        Nostalgic 2 adalah permainan nostalgia yang meremake game masa lalu.
                        Permainan ini merupakan sekuel dari nostalgic.
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

          <br />
        </div>
      
    </div>
  );
}

export default Nostalgic2;