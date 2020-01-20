import React, { useState } from 'react'
import Home from './Components/Home'
import Login from './Components/Login'
import Game from './Components/Game'
import Menu from './Components/Menubar'
import {
    BrowserRouter as Router,
    Route, Redirect
} from 'react-router-dom'
import loginService from './Services/login'


const App = () => {
    const [user, setUser] = useState(null)
    //const [points, setPoints] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault()
        console.log('loggin in with', username, password)
        try {
            const user = await loginService.login({ username, password })
            setUser(user)
            setUsername('')
            setPassword('')
        } catch (error) {
            console.log(error)
        }
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div className='container'>
            <Router>
                <div>
                    <div>
                        <Menu />
                    </div>
                    <Route exact path = '/' render={() => <Home />} />
                    <Route exact path = '/login' render={() =>
                        <Login handleLogin={handleLogin}
                            username={username}
                            password={password}
                            handleUsernameChange={handleUsernameChange}
                            handlePasswordChange={handlePasswordChange}
                        />} />
                    <Route path='/game' render={() => user ? <Game /> : <Redirect to='/login' />} />
                </div>
            </Router>
        </div>
    )
}

export default App