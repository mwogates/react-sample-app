import React from 'react';
import style from './styles.module.scss';
import classNames from 'classnames';

export default function Body({
  size = 'medium',
  colorName = 'white',
  color,
  align = 'left',
  children,
  ...props
}) {
  return React.createElement(
    'p',
    {
      ...props,
      style: {
        color,
        ...props.style,
      },
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
