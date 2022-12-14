
<script>
import {store} from '../store.js'
export default {
    template: ``,
    data() {
        return {
            newTodo: ''
        }
    },
    methods: {
        addTodo() {
            store.addTodoInServer(this.newTodo)
            this.newTodo = ''
        }
    }
}
</script>
<template>
    <form @submit.prevent="addTodo">
    <input type="text" v-model="newTodo" />
    <input type="submit">
</form>
</template>

