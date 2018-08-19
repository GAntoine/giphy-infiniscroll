import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import App from './app/App';
import gifs from './reducers/'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = compose(applyMiddleware(thunk))(createStore)(gifs);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
