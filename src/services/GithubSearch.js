import axios from 'axios';
import { PER_PAGE, GITHUB_API } from '../constants';

export async function getGithubUsers(searchQuery, currentPage) {
  return await axios.get(
    buildSearchUrl(searchQuery, currentPage)
  );
}

function buildSearchUrl(searchQuery, currentPage){
   return `${GITHUB_API}/search/users?q=${searchQuery}&per_page=${PER_PAGE}&page=${currentPage}`;
}