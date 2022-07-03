import React, { useState } from 'react';

import './App.css';
import Search from './Search';
import SearchResult from './SearchResult';
import { PER_PAGE } from './constants';
import { getGithubUsers } from './services/GithubSearch';


function App() {

  const [searchResult, setSearchResult] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const numberOfPages = Math.ceil(totalCount / PER_PAGE);

  const handleSubmit = () => {
    getUsers();
  };

  const handleQueryChange = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  const handleCurrentPage = (currentPage) => {
    getUsers(currentPage);
  }

  async function getUsers(currentPage) {
    try {
      const response = await getGithubUsers(searchQuery, currentPage || 1);
      setSearchResult(response.data.items);
      setTotalCount(response.data.total_count);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <Search searchUser={handleSubmit} changeHandler={handleQueryChange} />
      {searchResult.length > 0 && (
        <SearchResult
          items={searchResult}
          totalCount={totalCount}
          changeCurrentPage={handleCurrentPage}
          numberOfPages={numberOfPages}
        />
      )}
    </div>
  );
}

export default App;
