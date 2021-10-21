import React from 'react';
import cn from 'classnames';
import { InterfaceHtagProps, EnumTag } from './Htag.props';
import styles from './Htag.module.css';

export const Htag = ({
  tag = EnumTag.h1,
  children,
  className,
  ...props
}: InterfaceHtagProps): JSX.Element => {
  const classes = cn(className, styles[tag]);

  switch (tag) {
    case EnumTag.h1:
      return <h1 className={classes}>{children}</h1>;
    case EnumTag.h2:
      return <h2 className={classes}>{children}</h2>;
    case EnumTag.h3:
      return <h3 className={classes}>{children}</h3>;
    default:
      return <></>;
  }
};
