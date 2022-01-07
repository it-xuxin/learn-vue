import axios from "axios";

axios.interceptors.request.use(
    (config) => {
        const { url, params } = config
        console.log('Request:' + url + ',params:' + params)
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default {

    get(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .get(url, {
                    params: params,
                })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}
