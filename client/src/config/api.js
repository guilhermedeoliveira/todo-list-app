import axios from 'axios';

const API_URL = 'https://todo-list-node-api.herokuapp.com';

const API = axios.create({
  baseURL: API_URL
});

const SIGNIN_ENDPOINT = '/auth/signin';
const SIGNUP_ENDPOINT = '/auth/signup';
const TASK_ENDPOINT = '/task';

export default {
  signin: user => API.post(SIGNIN_ENDPOINT, user),
  signup: user => API.post(SIGNUP_ENDPOINT, user),

  getAllTasks: () => API.get(TASK_ENDPOINT).then(response => response.data),
  getTaskById: taskId => API.get(`${TASK_ENDPOINT}/${taskId}`).then(response => response.data)
};
