import axios from "axios";

export const myMadridApi= axios.create({
    baseURL:'http://127.0.0.1:9095/api/v1',
    headers: {
        'Access-Control-Allow-Origin': true,
    },
});