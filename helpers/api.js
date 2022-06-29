import axios from 'axios';

const api = {
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//   },
  baseURL: "http://23.102.128.226:5000/api/",
  timeout: 60000,
  responseType: 'json',
};

export default axios.create(api);