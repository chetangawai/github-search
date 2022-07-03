import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import SearchPagination from './SearchPagination';
import { Typography, CssBaseline, Divider } from '@material-ui/core';
import axios from 'axios';

const SearchResult = ({ items, searchQuery, totalCount }) => {
  const [data, setData] = useState(items);

  useEffect(() =>{
    setData(items);
  }, [items]);
  

  const PER_PAGE = 10;
  const numberOfPages = Math.ceil(totalCount / PER_PAGE);

  const handlePageNoChange = async (page) => {
    await getUsers(page);
  };

  async function getUsers(page) {
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${searchQuery}&per_page=10&page=${page}`,
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        }
      );
      setData(response.data.items);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="results-container">
      <CssBaseline />
      <Typography gutterBottom variant="h6" component="div">
        Showing {totalCount} results for "{searchQuery}"
      </Typography>
      <Divider />
      <div className="results">
        {data.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
      <div className="pagination">
        {data.length > 0 && (
          <SearchPagination
            items={data}
            totalCount={totalCount}
            numberOfPages={numberOfPages}
            pageNoChangeHandler={handlePageNoChange}
          />
        )}
      </div>
    </div>
  );
};
export default SearchResult;
