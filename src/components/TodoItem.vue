<script>
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
    }
}
</script>
<template>
    <li @dblclick="delTodo(todo.id)">
        <input type="checkbox" v-model="todo.done" />
        <del v-if="todo.done"> {{ todo.title }} </del>
        <span v-else> {{ todo.title }} </span>
    </li>
</template>
