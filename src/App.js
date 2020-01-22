import React, { useState, useEffect } from 'react'
import Home from './Components/Home'
import Login from './Components/Login'
import Game from './Components/Game'
import Menu from './Components/Menubar'
import Notification from './Components/Notification'
import NewUserForm from './Components/NewUserForm'
import Logout from './Components/Logout'
import {
    BrowserRouter as Router,
    Route, Redirect
} from 'react-router-dom'
import loginService from './Services/login'
import gameService from './Services/game'
import userService from './Services/user'


const App = () => {
    const [user, setUser] = useState(null)
    const [clicksToWin, setClicksToWin] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [gameMsg, setGameMsg] = useState('')
    const [message, setMessage] = useState(null)
    const [newUsername, setNewUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if(loggedUserJSON) {
            const fetchData = async (loggedUserJSON) => {
                const user = JSON.parse(loggedUserJSON)
                gameService.setToken(user.token)
                const gameStatus = await gameService.getGameStatus(user.id)
                user.points = gameStatus.points
                setUser(user)
                setClicksToWin(gameStatus.clicksToWin)
            }
            fetchData(loggedUserJSON)
        }
    }, [])

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({ username, password })
            window.localStorage.setItem('loggedUser', JSON.stringify(user))
            gameService.setToken(user.token)
            setUser(user)
            setUsername('')
            setPassword('')
            setUpNotification(`Logged in as ${user.username}`)
        } catch (error) {
            setUpNotification('Login failed.')
            setPassword('')
        }
    }

    const handleGameClick = async (event) => {
        event.preventDefault()
        const response = await gameService.getClickResult(user.id)

        setUser(response.updatedPlayer)
        setClicksToWin(response.clicksToWin)
        setGameMsg(response.gameMessage)
    }

    const handleNewGame = async (event) => {
        event.preventDefault()
        const response = await gameService.startNewGame(user.id)

        setUser(response.updatedPlayer)
        setClicksToWin(response.clicksToWin)
        setGameMsg(response.gameMessage)
    }

    const handleNewUser = async (event) => {
        event.preventDefault()
        try {
            const newUser = await userService.newUser({ username:newUsername, password:newPassword })

            setUpNotification(`${newUser.username} created!`)
            setNewUsername('')
            setNewPassword('')
        } catch(error) {
            setUpNotification('New user registration failed.')
        }
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleNewUsernameChange = (event) => {
        setNewUsername(event.target.value)
    }

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value)
    }

    const handleLogout = () => {
        window.localStorage.clear()
        setUser(null)
        setUpNotification('Logged out')
    }

    const setUpNotification = (message) => {
        setMessage(message)
        setTimeout(() => {
            setMessage(null)
        }, 5000)
    }

    return (
        <div className='container'>
            <Router>
                <div>
                    <div>
                        <Menu user={user} />
                        <Notification message={message} />
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
                            gameMsg={gameMsg}
                        /> :
                        <Redirect to='/login' />} />
                    <Route exact path = '/register' render={() =>
                        <NewUserForm handleNewUser={handleNewUser}
                            newUsername={newUsername}
                            newPassword={newPassword}
                            handleNewUsernameChange={handleNewUsernameChange}
                            handleNewPasswordChange={handleNewPasswordChange}
                        />} />
                    <Route path = '/logout' render={() =>
                        <Logout handleLogout={handleLogout}
                        />} />
                </div>
            </Router>
        </div>
    )
}

export default App