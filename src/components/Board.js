import React from "react";
import Square from "./Square";

function Board(props){
    return (
        <>
        {/* Row 1 */}
            <div className="board-row">
                <Square value="1"/>
                <Square value="2"/>
                <Square value="3"/>
            </div>
        {/* Row -2 */}
            <div className="board-row">
                <Square value="4"/>
                <Square value="5"/>
                <Square value="6"/>
            </div>
        {/* Row -3 */}
            <div className="board-row">
                <Square value="7"/>
                <Square value="8"/>
                <Square value="9"/>
            </div>
        </>
    );
}

export default Board;