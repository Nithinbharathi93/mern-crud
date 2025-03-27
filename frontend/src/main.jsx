import React from 'react'
import ReactDOM from "react-dom/client";
import axios from 'axios';
import './index.css'
import App from './App.jsx'

axios.default.baseURL = "http://localhost:5234/api";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)