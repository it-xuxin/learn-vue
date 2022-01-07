import axios  from "../axios";

export default {
    getHomeList() {
        return axios.get('/api/home/v1/config/home1Init')
    }
}