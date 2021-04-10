import axios from "axios";

export const instance = axios.create({
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Pragma': 'no-cache'
    }
});

// REQUEST INTERCEPTOR
instance.interceptors.request.use(req => {
    return req;
}, error => {
    return Promise.reject(error);
});

// RESPONSE INTERCEPTOR
instance.interceptors.response.use(res => {
    return res.data;
}, error => {
    return Promise.reject(error);
});
