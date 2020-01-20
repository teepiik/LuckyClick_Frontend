import React, { useState } from 'react'
import Home from './Components/Home'
import Login from './Components/Login'
import Game from './Components/Game'
import Menu from './Components/Menubar'
import {
    BrowserRouter as Router,
    Route, Link, Redirect
} from 'react-router-dom'


const App = () => {
    const [user, setUser] = useState(null)
    //const [points, setPoints] = useState('')
    //const [username, setUsername] = useState('')
    //const [password, setPassword] = useState('')

    const handleLogin = (user) => {
        setUser(user)
    }

    return (
        <div className='container'>
            <Router>
                <div>
                    <div>
                        <Menu />
                    </div>
                    <Route exact path = '/' render={() => <Home />} />
                    <Route exact path = '/login' render={() => <Login handleLogin={handleLogin}/>} />
                    <Route path='/game' render={() => user ? <Game /> : <Redirect to='/login' />} />
                </div>
            </Router>
        </div>
    )
}

export default App