import React from 'react';
import { Pagination, Stack } from '@mui/material';

const SearchPagination = ({ numberOfPages, pageNo, pageNoChangeHandler }) => {
  const handleChange = (event, page) => {
    pageNoChangeHandler(page);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={numberOfPages}
        size="large"
        page={pageNo}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Stack>
  );
};

export default SearchPagination;
