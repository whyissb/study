import axios from "axios";
import config from "./config";

let NODE_ENV = process.env.NODE_ENV;
const service = axios.create({
    baseURL: config.baseUrl[NODE_ENV],
    time: 60000,
})
service.interceptors.request.use(function (config) {
    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    return config;
}, function (error) {
    return Promise.reject(error);
});
export function get(url, params = {
}) {
    return new Promise((resolve, reject) => {
        service
            .get(url, {
                params: params,
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
//post请求
export function post(url, data = {
}) {
    return new Promise((resolve, reject) => {
        service.post(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                reject(err);
            }
        );
    });
}