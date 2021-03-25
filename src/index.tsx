/* eslint-disable no-console */
import './styles.scss';

import React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './app/App';

if ('serviceWorker' in navigator && import.meta.env['MODE'] === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

ReactDOM.render(<App />, document.getElementById('application'));
