import React from "react";
import Board from "./Board";
import './Game.css';

function Game(props){
    return(
        <div className="game">
            <div className="game-board">
                <Board/>
            </div>

            <div className="game-info">
                <ol>
                    <li>Hi</li>
                    <li>There</li>

                </ol>
            </div>
        </div>
    );
}

export default Game;