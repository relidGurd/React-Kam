import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </React.StrictMode>
        </BrowserRouter>
    );
}


renderEntireTree(store.getState())
store.subscribe(renderEntireTree)


reportWebVitals();
