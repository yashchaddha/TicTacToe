import React, { useState } from "react";
import './Square.css'

function Square({value,onSquareClick}){

    return (
        <button className="square" onClick={onSquareClick}>{value}</button>
    );
}

export default Square