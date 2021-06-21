import React from 'react';

import Headline from '@components/shared/Headline';
import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Headline variant="h2" colorName="white" align="center" className={styles.header__Title}>
        Search GitHub Users
      </Headline>
    </header>
  );
}

export default Header;
