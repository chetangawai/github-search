import React from 'react';
import { Typography, Avatar, Grid, Divider } from '@material-ui/core';
import { Link } from '@mui/material';

const CardItem = ({ item }) => {
  return (
    <React.Fragment>
      <Link href={item.url} underline="none" target="_blank" rel="noopener">
        <Grid container spacing={2} style={{ padding: 12 }}>
          <Grid item xs={2}>
            <Avatar
              alt="Profile pic"
              src={item.avatar_url}
              sx={{ width: 65, height: 65 }}
            />
          </Grid>
          <Grid item xs={10}>
            <Typography gutterBottom variant="h6" component="div">
              {item.login}
            </Typography>
          </Grid>
        </Grid>
        <Divider light />
      </Link>
    </React.Fragment>
  );
};
export default CardItem;
