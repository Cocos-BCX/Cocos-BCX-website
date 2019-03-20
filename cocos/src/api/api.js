import axios from 'axios'

const baseUrl = "http://api-cocos.dev.cjfan.net/api/v1/";
// const baseUrl = "http://192.168.15.37:10086/api/v1/"; //测试

export function get(url, msg, header) {
    return axios.get(baseUrl + url, {
        headers: header,
        params: msg
    })
}

export function post(url, msg, header) {
    return axios.post(baseUrl + url, msg, {
        headers: header
    })
} 