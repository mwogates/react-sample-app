import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

export default function Button({
  buttonType = 'primary',
  children,
  className = '',
  disabled = false,
  ...props
}) {
  const buttonRef = useRef(null);
  useEffect(() => {
    if (buttonRef) {
      // eslint-disable-next-line default-case
      switch (buttonType) {
        case 'primary':
          buttonRef.current.className = classNames(
            className,
            styles['button-primary'],
          );
          break;
        case 'secondary':
          buttonRef.current.className = classNames(
            className,
            styles['button-secondary'],
          );
          break;
      }
    }
  }, [buttonRef, buttonType, className]);

  return (
    <button
      ref={buttonRef}
      {...props}
      disabled={disabled}
      className={classNames(className, styles.button, {
        [styles['button-disabled']]: disabled,
      })}
    >
      {children}
    </button>
  );
}
