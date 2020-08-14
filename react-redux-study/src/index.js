import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store';

// 메모리 공간에 store가 만들어짐
const store = createStore(reducer);

ReactDOM.render(
  // 모든 곳에서 store에 바로 접근 가능!
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
