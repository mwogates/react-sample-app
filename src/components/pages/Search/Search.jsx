import React from 'react';
import Headline from '@components/shared/Headline';
import Input from '@components/shared/Input';
import Button from '@components/shared/Button';
import styles from './styles.module.scss';

const Search = ({ loading, setKeyword, searchByKeyword }) => {
  return (
    <div className={styles.search}>
      <Headline variant="h4" className={styles.search__Titie}>
        Search
      </Headline>
      <div className={styles.search__Form}>
        <Input onChange={(e) => setKeyword(e.target.value)} />
        <Button onClick={searchByKeyword} disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </Button>
      </div>
    </div>
  );
};

export default Search;
