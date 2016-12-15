// import React from 'react';
import ReactDOM from 'react-dom';
import router from './router';

// Custom bootstrap with larger fonts
import './index.css';
import './bootstrap/css/bootstrap.css';
import './bootstrap/css/bootstrap-theme.css';

ReactDOM.render(
  router,
  document.getElementById('root')
);

// <Provider store={store}>{router}</Provider>,
