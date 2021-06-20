import React from 'react';
import style from './styles.module.scss';
import classNames from 'classnames';

export default function Headline({
  variant = 'h1',
  align = 'left',
  color,
  colorName = 'dark',
  children,
  ...props
}) {
  return React.createElement(
    variant,
    {
      ...props,
      style: { color, ...props.style },
      className: classNames(
        props.className,
        style[`headline_${variant}`],
        style[`headline_${colorName}`],
        style[`headline_${align}`],
      ),
    },
    children,
  );
}
