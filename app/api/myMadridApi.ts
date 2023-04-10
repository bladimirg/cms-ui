import axios from "axios";

export const myMadridApi= axios.create({
    baseURL:'http://127.0.0.1:8080/api/v1',
    headers: {},
});