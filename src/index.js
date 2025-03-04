import React from 'react';
import './index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createRoot} from "react-dom/client";

const element = document.getElementById('root')

const root = createRoot(element)

root.render(
  <App/>
)
