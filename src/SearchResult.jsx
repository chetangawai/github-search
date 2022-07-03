import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import SearchPagination from './SearchPagination';
import { Typography, CssBaseline, Divider, Container } from '@mui/material';

const SearchResult = ({
  items,
  totalCount,
  changeCurrentPage,
  numberOfPages,
}) => {
  const [data, setData] = useState(items);

  useEffect(() => {
    setData(items);
  }, [items]);

  const handlePageNoChange = (page) => {
    changeCurrentPage(page);
  };

  return (
    <Container maxWidth="md">
      <div className="results-container">
        <CssBaseline />
        <Typography gutterBottom variant="h6" component="div">
          {totalCount} users found
        </Typography>
        <Divider />
        <div className="results">
          {data.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </div>
        <div className="pagination">
          {data.length > 0 && numberOfPages > 1 && (
            <SearchPagination
              items={data}
              totalCount={totalCount}
              numberOfPages={numberOfPages}
              pageNoChangeHandler={handlePageNoChange}
            />
          )}
        </div>
      </div>
    </Container>
  );
};
export default SearchResult;
