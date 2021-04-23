import http from '../http-common'

class LyricsDataService  {
    getAll = () => {
        return http.get('/lyrics');
    }

    getByCategory = (category) => {
        return http.get(`/lyrics/${category}`)
    }

    getCategories = ()=> {
        return http.get(`/lyrics/categories/`)
    }
}

export default new LyricsDataService();