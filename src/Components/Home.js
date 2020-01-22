import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Welcome to Lucky Click!</h1>
            <p>Lucky Click is a online multiplayer game.</p>
            <p>New player? Register <Link className='link' to='/register'>here</Link></p>
        </div>
    )
}

export default Home