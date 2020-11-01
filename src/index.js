require('dotenv')
  .config();
const express = require('express');
const routes = require('./routes');

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(3001, () => {
  console.log('Server started listening on PORT http://localhost:3001');
});

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// const express = require('express');
// const App 

//import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
