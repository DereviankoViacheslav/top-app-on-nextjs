import React from 'react';
import cn from 'classnames';
import { InterfacePtagProps, EnumParagraphSize } from './Ptag.props';
import styles from './Ptag.module.css';

export const Ptag = ({
  size = EnumParagraphSize.medium,
  children,
  className,
  ...props
}: InterfacePtagProps): JSX.Element => {
  return (
    <p className={cn(className, styles.paragraph, styles[size])} {...props}>
      {children}
    </p>
  );
};
