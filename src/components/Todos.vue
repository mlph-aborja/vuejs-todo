<template>
    <div>
        <h3>Todos List</h3>
        
        <AddTodo />

        <div v-for="todo in allTodos" v-bind:key="todo.id">
            <div class="todo">
                {{ todo.title }} <input v-model="todo.completed"  type="checkbox" @change="updateTodo(todo)"> Complete <button type="button" class="btn btn-danger" @click="removeTodo(todo)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapGetters, mapActions } from 'vuex';
    import AddTodo from './AddTodo';

    export default {
        computed: mapGetters(['allTodos']),
        methods: {
            ...mapActions(['findAllTodos', 'removeTodo', 'updateTodo'])
        },
        created() {
            this.findAllTodos();
        },
        components: {
            AddTodo
        }
    }
</script>

<style scoped>
    .todo {
        margin: 20px;
    }
</style>