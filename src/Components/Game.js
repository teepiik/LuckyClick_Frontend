import React from 'react'
import { Button } from 'react-bootstrap'

const Game = (props) => {

    if(props.user.points < 1) {
        return (
            <div>
                <h2>Game Over!</h2>
                <Button className='button' variant='info' onClick={props.handleNewGame}>New Game</Button>
            </div>
        )
    }

    return (
        <div>
            <p>Game page</p>
            <p>Player: {props.user.username}</p>
            <p>Points: {props.user.points}</p>
            <p>Last result: {props.gameMsg}</p>
            <p>Clicks to next win: {props.clicksToWin}</p>
            <Button className='button' variant='dark' onClick={props.handleGameClick}>Lucky Click</Button>
        </div>
    )
}

export default Game