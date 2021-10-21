import React from 'react';
import cn from 'classnames';
import {
  InterfaceButtonProps,
  EnumArrow,
  EnumAppearance
} from './Button.props';
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';

export const Button = ({
  appearance = EnumAppearance.ghost,
  arrow = EnumArrow.none,
  children,
  className,
  ...props
}: InterfaceButtonProps): JSX.Element => {
  return (
    <button
      className={cn(className, styles.button, styles[appearance])}
      {...props}
    >
      {children}
      {arrow != EnumArrow.none && (
        <span className={cn(styles.arrow, styles[arrow])}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
