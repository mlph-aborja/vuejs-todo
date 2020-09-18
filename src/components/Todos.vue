<template>
    <div>
        <h1>Todos List</h1>
        
        <div v-for="todo in allTodos" v-bind:key="todo.id">
            {{ todo.title }}
        </div>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';

    export default {
        computed: mapGetters(['allTodos'])
    }
</script>

<style>

</style>