import React, { useState } from 'react';
import Dropdown from '@components/shared/Dropdown';
import Body from '@components/shared/Body';
import Pagination from '@components/shared/Pagination';
import styles from './styles.module.scss';

const Result = ({
  users,
  pagesCount,
  currentPage,
  loading,
  isError,
  onCurrentPageChange,
  onSortOptionChange,
}) => {
  const [selectedLabel, setSelectedLabel] = useState('Best match');

  const onChange = (selectedOption) => {
    setSelectedLabel(selectedOption.label);
    onSortOptionChange(selectedOption.value);
  };

  const sortOptions = [
    {
      value: '&sort=&order=desc',
      label: 'Best match',
    },
    {
      value: '&sort=followers&order=desc',
      label: 'Most followers',
    },
    {
      value: '&sort=followers&order=asc',
      label: 'Fewest folloers',
    },
    {
      value: '&sort=joined&order=desc',
      label: 'Most recently joined',
    },
    {
      value: '&sort=joined&order=asc',
      label: 'Least recently joined',
    },
    {
      value: '&sort=repositories&order=desc',
      label: 'Most repositories',
    },
    {
      value: '&sort=repositories&order=asc',
      label: 'Fewest repositories',
    },
  ];

  return (
    <div className={styles.result}>
      {isError ? (
        <Body colorName="dark" align="center" size="large">
          There is an error occurred. Please try again.
        </Body>
      ) : (
        <>
          <div className={styles.result__Sort}>
            <Dropdown
              options={sortOptions}
              selectedLabel={selectedLabel}
              onChange={onChange}
            ></Dropdown>
          </div>
          <div className={styles.result__TableContainer}>
            <table className={styles.result__Table}>
              <thead className={styles.result__Table__Head}>
                <tr>
                  <td></td>
                  <td>Login</td>
                  <td>Type</td>
                </tr>
              </thead>
              <tbody className={styles.result__Table__Body}>
                {!pagesCount ? (
                  <tr>
                    <td colSpan={3}>No results. Please use correct keyword.</td>
                  </tr>
                ) : (
                  <>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td>
                          <img src={user.avatar_url} alt={user.login} />
                        </td>
                        <td>{user.login}</td>
                        <td>{user.type}</td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
          {pagesCount > 1 && (
            <div className={styles.result__Pagination}>
              <Pagination
                pagesCount={pagesCount}
                currentPage={currentPage}
                onCurrentPageChange={onCurrentPageChange}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Result;
