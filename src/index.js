import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { GlobalStyle } from '../src/components/Globalstyle';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/TWEETS_test_project">
      <GlobalStyle/>
          <App />
    </BrowserRouter>
  </React.StrictMode>
);
