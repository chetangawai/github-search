import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  TextField,
  Grid,
  CssBaseline,
  Container,
  Typography,
  Button
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '15px',
  },
  buttonRoot: {
    height: '55px'
  }
}));

const Search = ({ searchUser, changeHandler }) => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    searchUser();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Typography variant="h6" component="div">
            Github Search
          </Typography>
          <Grid container spacing={1} className={classes.root}>
            <Grid item xs={10}>
              <TextField
                margin="none"
                id="outlined-secondary"
                variant="outlined"
                fullWidth={true}
                placeholder="Search GitHub"
                onChange={(e) => changeHandler(e.target.value)}
                type="search"
              />
            </Grid>
            <Grid item xs={2}>
              <Button variant="outlined" type="submit" size="large" className={classes.buttonRoot}>
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
};

export default Search;
