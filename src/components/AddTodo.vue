<template>
    <div class="container-sm">
        <h3>Add Todo</h3>
        <div class="input-group">
            <input v-model="title" type="text" class="form-control" placeholder="Todo title" aria-label="Todo title" aria-describedby="button-addon4">
            <div class="input-group-append" id="button-addon4">
                <button class="btn btn-outline-secondary" type="button" @click="onSubmit()">Add Todo</button>
            </div>
        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
    data() {
        return {
            title: ''
        }
    },
    methods: { 
        ...mapActions(['addTodo']),
        onSubmit() {
            const title = this.$data.title
            this.addTodo(title);
            this.$data.title = '';
        } 
    }
}
</script>

<style>

</style>