import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { GlobalStyle } from '../src/components/Globalstyle';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/TWEETS_test_project">
      <GlobalStyle/>
      <Provider store={store}>
        <Container>
          <App />
        </Container>

    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
