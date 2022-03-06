import React from "react";
import ReactDOM from "react-dom";
import "reflect-metadata";
import App from "./App";
import Navbar from "./components/Navbar";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(<><BrowserRouter>
<Navbar />
    <App/>
</BrowserRouter></>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
