import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {createStore, compose} from "redux";
import {Provider} from "react-redux";
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import {createFirestoreInstance} from "redux-firestore";
import {rootReducer} from "./config/reducer";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const firebaseConfig = {
    apiKey: "AIzaSyCzSdkhHlqcdjPjNndglBV2L8wSRJEH_ko",
    authDomain: "dalkommkorea.firebaseapp.com",
    databaseURL: "https://dalkommkorea.firebaseio.com",
    projectId: "dalkommkorea",
    storageBucket: "dalkommkorea.appspot.com",
    messagingSenderId: "251140200776",
    appId: "1:251140200776:web:ff2be4aa2de31d150fbb7d",
    measurementId: "G-WXR5B4CEHT"
};

const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </ReactReduxFirebaseProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById(
        "root"
    )
);
