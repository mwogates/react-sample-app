import React from 'react';
import classNames from 'classnames';
import style from './styles.module.scss';

export default function Body({
  size = 'medium',
  colorName = 'white',
  align = 'left',
  children,
  ...props
}) {
  return React.createElement(
    'p',
    {
      ...props,
      style: { ...props.style },
      className: classNames(
        props.className,
        style[`body_${align}`],
        style[`body_${size}`],
        style[`body_${colorName}`],
      ),
    },
    children,
  );
}
