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
import gameService from './Services/game'


const App = () => {
    const [user, setUser] = useState(null)
    const [clicksToWin, setClicksToWin] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault()
        console.log('loggin in with', username, password)
        try {
            const response = await loginService.login({ username, password })
            window.localStorage.setItem('token', response.token)
            setUser(response.user)
            setUsername('')
            setPassword('')
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const handleGameClick = async (event) => {
        event.preventDefault()
        console.log('Button clicked!')
        // api/users/click/id
        // response {player, clicksToWin, gameMessage}
        const response = await gameService.getClickResult(user.id)
        console.log(response)
        setUser(response.updatedPlayer)
        setClicksToWin(response.clicksToWin)
    }

    const handleNewGame = async (event) => {
        event.preventDefault()
        console.log('New game requested')
        // api/users/newgame/id
        const response = await gameService.startNewGame(user.id)
        console.log(response)
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
                    <Route path='/game' render={() => user ?
                        <Game handleGameClick={handleGameClick}
                            user={user}
                            handleNewGame={handleNewGame}
                            clicksToWin={clicksToWin}
                        /> :
                        <Redirect to='/login' />} />
                </div>
            </Router>
        </div>
    )
}

export default App