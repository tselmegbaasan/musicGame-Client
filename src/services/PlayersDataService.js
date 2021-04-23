import http from '../http-common';

class PlayersDataService {
    getAll = () => {
        return http.get('/players')
    }

    getOne = (username) => {
        return http.get(`/players/${username}`)
    }

    addPlayer = (username) => {
        const req_body = {
            "username": username
        }
        return http.post(`/players`, req_body)
    }

    deletePlayer = (username) => {
        return http.delete(`/players/${username}`)
    }
}


export default new PlayersDataService();