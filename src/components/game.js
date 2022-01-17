import React, { Component } from "react";
import './components_css/game.css';
import game_img from './../imgs/game/game-controller.png'
import stage1 from './../imgs/game/free-icon-soil-3382647.png'
import stage2 from './../imgs/game/free-icon-stone-836972.png'
import stage3 from './../imgs/game/bronze-medal.png'
import stage4 from './../imgs/game/free-icon-silver-medal-179251.png'
import stage5 from './../imgs/game/free-icon-gold-medal-179249.png'
import stage6 from './../imgs/game/free-icon-ruby-492012.png'
import stage7 from './../imgs/game/diamond.png'
import stage8 from './../imgs/game/free-icon-crown-1404908.png'



class Game_List extends Component {
    render() {
        return (
            <div className='game_main'>
                <nav className='game_nav'>
                    <img src={game_img}></img>
                    <p>Game List</p>
                </nav>
                <article className='game_article'>
                    <div className='lesson_1'>
                        <div className='icon_circle'>
                            <img></img>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default Game_List;