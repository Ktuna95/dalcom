import React, {Component} from 'react';
import './components_css/home.css';
import Home_logo from './../imgs/dalkomm_logo/big_logo.png';
import Study_img from './../imgs/studying (1).png';
import game_img from './../imgs/game-pad.png';
import dictionary_img from './../imgs/free-icon-encyclopedia-1050442.png';
import profile_img from './../imgs/free-icon-profile-2919863.png';
import footer_img from './../imgs/studying.png';
import {useFirebase} from "react-redux-firebase";
import {useHistory} from "react-router-dom";

const HomeUI = () => {
    const firebase = useFirebase();
    const history = useHistory();

    const signInWithGoogle = () => {
        firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                const provider = new firebase
                    .auth
                    .GoogleAuthProvider()
                firebase
                    .auth()
                    .onAuthStateChanged((user) => {
                        if (user) {
                            return history.push("/main_page")
                        } else {
                            firebase
                                .auth()
                                .signInWithPopup(provider)
                                .then(() => {
                                    history.push("/main_page")
                                });
                        };
                    });
            });
    }
    return (
        <div className='home_wrap'>
            <nav className='home_nav'>
                <img src={Home_logo}></img>
            </nav>
            <article className='home_body'>
                <div className='study_button'>
                    <a>
                        <img src={Study_img}></img>
                    </a>
                </div>
                <div className='game_button'>
                    <a>
                        <img src={game_img}></img>
                    </a>
                </div>
                <div className='dictionary_button'>
                    <a>
                        <img src={dictionary_img}></img>
                    </a>
                </div>
                <div className='profile_button'>
                    <a>
                        <img src={profile_img}></img>
                    </a>
                </div>
                <footer className='main_footer'>
                    <img src={footer_img}></img>
                </footer>
            </article>
            <div className='login_article'>
                <p>
                    Please use after logging in<br></br>with Google.
                </p>
                <a
                    href=''
                    onClick={(e) => {
                        e.preventDefault();
                        signInWithGoogle();
                    }}>
                    Log-in
                </a>
            </div>
        </div>
    );
};

export default HomeUI;