import React from 'react'
import { Button } from 'react-bootstrap'

const Game = (props) => {

    if(props.points < 1) {
        return (
            <div>
                <h2>Game Over!</h2>
            </div>
        )
    }

    return (
        <div>
            <p>Game page</p>
            <p>Player: {props.user.username}</p>
            <p>Points: {props.user.points}</p>
            <p>Clicks to next win: {props.clicksToWin}</p>
            <Button onClick={props.handleGameClick}>Lucky Click</Button>
        </div>
    )
}

export default Game