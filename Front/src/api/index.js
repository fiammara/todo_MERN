import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
});

export const insertTodo = (payload) => api.post('/todos', payload);
export const getAllTodo = () => api.get('/todos');
export const updateTodoById = (id, payload) => api.put(`/todos/${id}`, payload);
export const deleteTodoById = (id) => api.delete(`/todos/${id}`);
export const getTodoById = (id) => api.get(`/todos/${id}`);

export const insertArchive = (payload) => api.post('/archive', payload);
export const getAllArchive = () => api.get('/archive');
export const updateArchiveById = (id, payload) => api.put(`/archive/${id}`, payload);
export const deleteArchiveById = (id) => api.delete(`/archive/${id}`);
export const getArchiveById = (id) => api.get(`/archive/${id}`);

const apis = {
    insertTodo,
    getAllTodo,
    updateTodoById,
    deleteTodoById,
    getTodoById,

    insertArchive,
    getAllArchive,
    updateArchiveById,
    deleteArchiveById,
    getArchiveById,
};

export default apis;
