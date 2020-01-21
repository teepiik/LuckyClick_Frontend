import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/users'

const getClickResult = async id => {
    const res = await axios.get(`${baseUrl}/click/${id}`)
    return res.data
}

const startNewGame = async id => {
    const res = await axios.get(`${baseUrl}/newgame/${id}`)
    return res.data
}

export default { getClickResult, startNewGame }