import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ghpages from 'gh-pages';
import * as serviceWorker from './serviceWorker';

//index.js take the app function and renders it in the browser

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
