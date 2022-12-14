<script>
import AppDelTodos from "./components/AppDelTodos.vue";
import AddTodo from "./components/AddTodo.vue";
import ListarTodos from "./components/ListarTodos.vue";
import AppTitle from "./components/AppTitle.vue";
import { store } from "./store";

export default {
  components: {
    AddTodo,
    AppDelTodos,
    AppTitle,
    ListarTodos
  },
  mounted() {
    store.listarTodosInServer()
  }
}
</script>

<template>
  <app-title title="Cosas a hacer este año"></app-title>
        <listar-todos></listar-todos>
        <add-todo></add-todo>
        <br>
        <app-del-todos></app-del-todos>
</template>

<style>
</style>
