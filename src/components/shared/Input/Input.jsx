import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

export default function Input({ className, ...rest }) {
  return (
    <input {...rest} className={classNames(styles.input_Field, className)} />
  );
};
