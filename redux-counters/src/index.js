import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store'
const render = () => {
  return (
    ReactDOM.render(
      <React.StrictMode>
        <App store={store} />
      </React.StrictMode>,
      document.getElementById('root')
    )
  )
}

render();

store.subscribe(render)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();