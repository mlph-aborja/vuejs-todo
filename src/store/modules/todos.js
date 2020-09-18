
import Axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async addTodo({ commit }, newTodo) {
        commit('create', newTodo);
    },
    async findAllTodos({ commit }) {
        const response = await Axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('findAll', response.data);
    }
};

const mutations = {
    create: (state, todo) => {
        const newTodo = {
            id: state.todos.length + 1,
            title: todo
        }
        state.todos.unshift(newTodo);
    },
    findAll: (state, todos) => {
        state.todos = todos
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}