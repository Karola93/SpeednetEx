import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./App/store/store";
import {CookiesProvider} from 'react-cookie';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <CookiesProvider>
                <React.StrictMode>
                    <App/>
                </React.StrictMode>
            </CookiesProvider>
        </Provider>
    </BrowserRouter>
);

reportWebVitals();
