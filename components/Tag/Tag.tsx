import React from 'react';
import cn from 'classnames';
import { InterfaceTagProps, EnumTagSize, EnumColor } from './Tag.props';
import styles from './Tag.module.css';

export const Tag = ({
  size = EnumTagSize.small,
  color = EnumColor.ghost,
  href,
  children,
  className,
  ...props
}: InterfaceTagProps): JSX.Element => {
  return (
    <div
      className={cn(className, styles.tag, styles[size], styles[color])}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
};
