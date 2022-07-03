import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';

const SearchPagination = ({
  items,
  totalCount,
  numberOfPages,
  pageNo,
  pageNoChangeHandler,
}) => {

  const handleChange = (event, page) => {
    pageNoChangeHandler(page);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={numberOfPages}
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
};

export default SearchPagination;
