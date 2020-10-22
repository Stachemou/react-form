import axios from 'axios';
export const instance = axios.create({
    baseURL: "https://restcountries.eu/rest/v2"
});
export const post = axios.create({
    baseURL: "https://effy-simple-api.herokuapp.com"
});