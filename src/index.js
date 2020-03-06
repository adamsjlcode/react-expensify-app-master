import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import AppRouter from "./routers/AppRouter";
import configureStore from "./js/store/configureStore"
import "normalize.css/normalize.css";
import "./css/style.scss";

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(jsx, wrapper) : false;
