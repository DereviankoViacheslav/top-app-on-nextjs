import React from 'react';
import cn from 'classnames';
import { InterfaceHeaderProps } from './Header.props';
import styles from './Header.module.css';

export const Header = (props: InterfaceHeaderProps): JSX.Element => {
  return <div {...props}>Header</div>;
};
