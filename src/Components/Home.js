import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Welcome to Lucky Click!</h1>
            <p>Lucky Click is a online multiplayer game.</p>
            <p>New player? Register <Link to='/register'>here</Link>.</p>
            <div>
                <h3>Rules for the game</h3>
                <em>
                    Every game starts with user having 20 points.<br></br>
                    Every click costs 1 points.<br></br>
                    Server rewards:<br></br>
                    <ol>
                        <li>Every 10th click 5 points</li>
                        <li>Every 100th click 40 points</li>
                        <li>Every 500th click 250 points</li>
                        <li>Only the highest win is rewarded.</li>
                    </ol>
                    Players get information after click that how many clicks away is the next win.<br></br>
                    Game ends if player has 0 (or less) points.
                </em>
            </div>
        </div>
    )
}

export default Home