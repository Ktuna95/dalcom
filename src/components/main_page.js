import React from "react";
import {useSelector} from "react-redux";
import {useFirestoreConnect} from "react-redux-firebase";
import './components_css/main_page.css';
import Home_logo from './../imgs/dalkomm_logo/big_logo.png';
import Study_img from './../imgs/studying (1).png';
import game_img from './../imgs/game-pad.png';
import dictionary_img from './../imgs/free-icon-encyclopedia-1050442.png';
import profile_img from './../imgs/free-icon-profile-2919863.png';
import footer_img from './../imgs/studying.png';
import Game_List from './game';
import { Router, Route, Link } from "react-router-dom";

const Main_page = () => {
    const {displayName, uid} = useSelector((state) => state.firebase.auth);
    useFirestoreConnect({collection: `users/${uid}/todos`, storeAs: "todos"});
    const todos = useSelector((state) => state.firestore.data.todos);
    console.log(todos);
    return (
        <div className='home_wrap'>
            <nav className='home_nav'>
                <img src={Home_logo}></img>
                <div className='home_nav_article'>
                    <p>
                        Hello {displayName}
                    </p>
                </div>
            </nav>
            <article className='home_body'>
                <div className='study_button'>
                    <a>
                        <img src={Study_img}></img>
                        <p>Study</p>
                    </a>
                </div>
                <div className='game_button'>
                    <Link to='/game'>
                        <img src={game_img}></img>
                        <p>Game</p>
                    </Link>
                </div>
                <div className='dictionary_button'>
                    <a>
                        <img src={dictionary_img}></img>
                        <p>Dictionary</p>
                    </a>
                </div>
                <div className='profile_button'>
                    <a>
                        <img src={profile_img}></img>
                        <p>Profile</p>
                    </a>
                </div>
                <footer className='main_footer'>
                    <img src={footer_img}></img>
                </footer>
            </article>
        </div>
    );
};

export default Main_page;