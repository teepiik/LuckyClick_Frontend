import React, { useState } from 'react'
import Home from './Components/Home'
import Login from './Components/Login'
import Game from './Components/Game'
import {
    BrowserRouter as Router,
    Route, Link, Redirect
} from 'react-router-dom'


const App = () => {
    const [user, setUser] = useState(null)
    const [points, setPoints] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = (user) => {
        setUser(user)
    }

    return (
        <div>
            <Router>
                <div>
                    <div>
                        <Link className='link' to='/'>Home</Link>
                        <Link className='link' to='/game'>Game</Link>
                        <Link className='link' to='/login'>Login</Link>
                    </div>
                    <Route exact path = '/' render={() => <Home />} />
                    <Route exact path = '/login' render={() => <Login />} />
                    <Route path='/game' render={() => user ? <Game /> : <Redirect to='/login' />} />
                </div>
            </Router>
        </div>
    )
}

export default App