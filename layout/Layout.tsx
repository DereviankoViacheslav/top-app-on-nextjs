import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import { InterfaceLayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { Sidebar } from './Sidebar/Sidebar';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export const Layout = ({ children }: InterfaceLayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
