import {instance as axios} from "./config.service";

export const getTranslation = () => {
    const apiDetails = {
        url: '/stub/translation.json',
        method: 'get'
    }
    return axios(apiDetails);
}
