import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import './index.css';
import { AuthProvider } from '../../components/context/AuthContext';

render(
  <AuthProvider>
    <Popup />
  </AuthProvider>,
  window.document.querySelector('#app-container')
);

if (module.hot) module.hot.accept();
