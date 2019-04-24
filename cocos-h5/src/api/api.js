import axios from 'axios'

// const baseUrl = "http://192.168.15.37:10086/api/v1/"; //测试
const baseUrl = "http://api-test.cocosbcx.io/api/v1/";

export const explorer = 'https://explorer.cocosbcx.io/'
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