<script>
import { store } from "../store.js";
export default {
    data() {
        return {
        }
    },
    methods: {
        delTodos() {
            store.delTodos()
        }
    }
}
</script>
<template>
    <button @click="delTodos">Borrar todas las cosas</button>
</template>


