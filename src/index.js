import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import {composeWithDevTools} from 'redux-devtools-extension';
import './sass/style.scss';
import App from './components/app/app';
// import {reducer} from './store/reducer';

// const store = createStore(
//     reducer,
//     composeWithDevTools()
// );

// ReactDOM.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById(`root`)
// );

ReactDOM.render(
      <App />,
    document.getElementById(`root`)
);