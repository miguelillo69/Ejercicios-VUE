<script>
import { store } from "../store";

export default {
    props: ['todo'],
    template: ``,
    data() {
        return {
        }
    },
    methods: {
        delTodo() {
            this.$emit('borrame', this.todo.id)
        },
        cambiarDone(todo) {
            store.cambiarDone(todo)
        }
    }
}
</script>
<template>
    <li @dblclick="delTodo(todo.id)">
        <input type="checkbox" :checked="todo.done" @change="cambiarDone(todo)" />
        <del v-if="todo.done"> {{ todo.title }} </del>
        <span v-else> {{ todo.title }} </span>
    </li>
</template>
