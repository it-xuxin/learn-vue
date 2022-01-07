import axios  from "../axios";

export default {
    getHomeList() {
        return axios.get('/api/login')
    }
}