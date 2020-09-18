
import Axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async addTodo({ commit }, title) {
        const newTodo = {
            id: state.todos.length + 1,
            title: title,
            completed: false
        }
        const response = await Axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
        commit('create', response.data);
    },
    async findAllTodos({ commit }) {
        const response = await Axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('findAll', response.data);
    },
    async removeTodo({ commit }, todo) {
        await Axios.delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`);
        commit('remove', todo);
    },
    async updateTodo({ commit }, todo) {
        const response = await Axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo );
        commit('update', response.data);
    }
};

const mutations = {
    create: (state, todo) => {
        state.todos.unshift(todo);
    },
    findAll: (state, todos) => {
        state.todos = todos
    },
    remove: (state, todo) => {
        const index = state.todos.findIndex(element => element.id === todo.id);
        state.todos.splice(index, 1);
    }, 
    update: (state, todo) => {
        const index = state.todos.findIndex(element => element.id === todo.id);
        state.todos[index] = todo;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}