import React from 'react';

import Headline from '@components/shared/Headline';
import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Headline color="white" align="center" className={styles.header__Title}>
        React Sample App
      </Headline>
    </header>
  );
}

export default Header;
