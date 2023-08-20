import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { reducer } from './page/reducer/combineReducer';
import thunk from 'redux-thunk';
import Footer from './page/footer/footer';
import Header from './page/header/header';
import { iceCreamReducer } from './page/reducer/ice-cream-reducer';

const store = createStore(iceCreamReducer,applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Provider store={store}>
    <Header/>
    <App />
    <Footer/>
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
