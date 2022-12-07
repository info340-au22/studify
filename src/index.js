import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { initializeApp } from "firebase/app";

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App';

const firebaseConfig = {
  apiKey: "AIzaSyBNUsm0X0NbTjlA4wKTHJDST0k20c0TL_4",
  authDomain: "studify-883c3.firebaseapp.com",
  databaseURL: "https://studify-883c3-default-rtdb.firebaseio.com",
  projectId: "studify-883c3",
  storageBucket: "studify-883c3.appspot.com",
  messagingSenderId: "502443665293",
  appId: "1:502443665293:web:0739af0cfe203aaa37bfc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);