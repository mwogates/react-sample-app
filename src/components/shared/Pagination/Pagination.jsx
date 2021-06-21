import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

export default function Dropdown({
  pagesCount,
  currentPage,
  onCurrentPageChange,
}) {
  return (
    <div className={classNames(styles.pagination)}>
      <span
        className={classNames(styles.pagination__Button, {
          [styles.pagination__Button_Disabled]: currentPage === 1,
        })}
        onClick={() => onCurrentPageChange(1)}
      >
        First
      </span>
      <span
        className={classNames(styles.pagination__Button, {
          [styles.pagination__Button_Disabled]: currentPage < 2,
        })}
        onClick={() => onCurrentPageChange(currentPage - 1)}
      >
        Previous
      </span>
      <span
        className={classNames(styles.pagination__Button, {
          [styles.pagination__Button_Disabled]: currentPage > pagesCount - 1,
        })}
        onClick={() => onCurrentPageChange(currentPage + 1)}
      >
        Next
      </span>
      <span
        className={classNames(styles.pagination__Button, {
          [styles.pagination__Button_Disabled]: currentPage === pagesCount,
        })}
        onClick={() => onCurrentPageChange(pagesCount)}
      >
        Last
      </span>
    </div>
  );
}
