import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/users'

let config = null

const setToken = newToken => {
    config = { headers: { Authorization: `bearer ${newToken}` } }
}

const getClickResult = async id => {
    const res = await axios.get(`${baseUrl}/click/${id}`, config)
    return res.data
}

const startNewGame = async id => {
    const res = await axios.get(`${baseUrl}/newgame/${id}`, config)
    return res.data
}

const getGameStatus = async id => {
    const res = await axios.get(`${baseUrl}/gamestatus/${id}`, config)
    return res.data
}

export default { getClickResult, startNewGame, setToken, getGameStatus }