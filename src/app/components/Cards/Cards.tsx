import React, { FC } from 'react';
import styles from './Cards.module.css';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import playerIcon from "../../../assets/icons/avatar-placeholder.png";

interface CardProps {}

const Cards: FC<CardProps> = () => (
  <div data-testid="Card">
      <Card sx={{display: 'flex'}}>
          <CardMedia
              sx={{ width: 151 }}
              component="img"
              alt="Player"
              src={playerIcon}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography gutterBottom variant="h5" component="div">
                      Nom du joueur
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      <span>Rang Silver - AK</span>
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small">100€</Button>
                  <Button size="small">Ajouter au panier</Button>
              </CardActions>
          </Box>
      </Card>

  </div>
);

export default Cards;
