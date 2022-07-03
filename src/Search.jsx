import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
  TextField,
  Grid,
  CssBaseline,
  Container,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
import SearchResult from './SearchResult';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '20px',
  },
}));

const Search = (props) => {
  const classes = useStyles();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    gitHubSearch();
  };

  const gitHubSearch = async () => {
    const response = await getUsers();
    setSearchResult(response.items);
    setTotalCount(response.total_count);
  };

  async function getUsers() {
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${searchQuery}&per_page=10`,
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        }
      );
      console.log('response in getUsers', response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

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
            Github search
          </Typography>
          <Grid container spacing={1} className={classes.root}>
            <Grid item xs={10}>
              <TextField
                margin="none"
                id="outlined-secondary"
                variant="outlined"
                fullWidth={true}
                placeholder="Search GitHub"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" type="submit" size="large">
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
        {searchResult.length > 0 && (
          <SearchResult
            items={searchResult}
            searchQuery={searchQuery}
            totalCount={totalCount}
          />
        )}
      </Container>
    </React.Fragment>
  );
};

export default Search;
