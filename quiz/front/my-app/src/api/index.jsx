import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const fetchQuizzes = () => API.get('/api/quizzes');
export const createQuiz = (newQuiz) => API.post('/api/quizzes', newQuiz);
export const login = (formData) => API.post('/api/users/login', formData);
export const register = (formData) => API.post('/api/users/register', formData);
