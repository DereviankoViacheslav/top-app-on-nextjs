import React from 'react';
import cn from 'classnames';
import { InterfaceSidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';

export const Sidebar = (props: InterfaceSidebarProps): JSX.Element => {
  return <div {...props}>Sidebar</div>;
};
