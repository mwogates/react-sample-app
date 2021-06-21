import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from '@components/pages/Search';
import Result from '@components/pages/Result';

const perPage = 9;
const apiURL = 'https://api.github.com/search/users';

function Home() {
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);
  const [pagesCount, setPagesCount] = useState(0);

  const searchUsers = async (keyword, currentPage, sortOption) => {
    if (loading) return;
    setLoading(true);
    try {
      /*
       * Need to use `${apiURL}?q=${keyword}+in:login` because
       * `+` is converted to `%2B` in paramsSerializer of axios
       */
      const res = await axios.get(
        `${apiURL}?q=${keyword}+in:login${sortOption || ''}`,
        {
          params: {
            per_page: perPage,
            page: currentPage,
          },
        },
      );
      setUsers(res.data?.items || []);

      // total count should be under 1000 because only the first 1000 search results are available
      const pagesCount =
        res.data?.total_count > 1000 ? 1000 : res.data?.total_count;
      setPagesCount(Math.ceil((pagesCount || 0) / perPage));
      setIsError(false);
    } catch (e) {
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchUsers(keyword, currentPage, sortOption);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, keyword, sortOption]);

  const searchByKeyword = () => {
    setCurrentPage(1);
    searchUsers(keyword, 1, sortOption);
  };

  const onCurrentPageChange = (currentPage) => {
    if (currentPage === 0 || currentPage > pagesCount) return;
    setCurrentPage(currentPage);
    searchUsers(keyword, currentPage, sortOption);
  };

  const onSortOptionChange = (sortOption) => {
    setSortOption(sortOption);
    searchUsers(keyword, currentPage, sortOption);
  };

  return (
    <div className="container">
      <Search
        loading={loading}
        setKeyword={setKeyword}
        searchByKeyword={searchByKeyword}
      />
      <Result
        users={users}
        pagesCount={pagesCount}
        currentPage={currentPage}
        loading={loading}
        isError={isError}
        onCurrentPageChange={onCurrentPageChange}
        onSortOptionChange={onSortOptionChange}
      />
    </div>
  );
}

export default Home;
