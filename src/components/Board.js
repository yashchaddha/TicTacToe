import React, { useState } from "react";
import Square from "./Square";

function Board(props){

    const [squares,setSquares]=useState(Array(9).fill(null));

    function handleClick(){
        const nextSquares=squares.slice();
        nextSquares[0]='X';
        setSquares(nextSquares);
    }

    return (
        <>
        {/* Row 1 */}
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={handleClick}/>
                <Square value={squares[1]}/>
                <Square value={squares[2]}/>
            </div>
        {/* Row -2 */}
            <div className="board-row">
                <Square value={squares[3]}/>
                <Square value={squares[4]}/>
                <Square value={squares[5]}/>
            </div>
        {/* Row -3 */}
            <div className="board-row">
                <Square value={squares[6]}/>
                <Square value={squares[7]}/>
                <Square value={squares[8]}/>
            </div>
        </>
    );
}

export default Board;