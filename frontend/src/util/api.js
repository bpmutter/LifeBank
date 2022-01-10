//export const API_URL = 'http://localhost:8080';
export const API_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';
//" https://life-bank.herokuapp.com";

export default API_URL