import React from 'react';

import styles from './App.module.scss';
import { Header } from './components/Header';

export const App = (): JSX.Element => (
  <div className={styles['container']}>
    <Header></Header>
  </div>
);
