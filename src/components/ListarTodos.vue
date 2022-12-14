<script>
import TodoItem from "./TodoItem.vue";
import { store } from "../store.js";
export default {
  data() {
    return {
        todos: store.state.todos
    };
  },
  methods: {
    borrarItem(id) {
     store.delItemInServer(id)
    },
  },
  components: {
    TodoItem,
  },
};
</script>
<template>
  <p v-if="!todos.length">No hay cosas que mostrar</p>
  <p v-else>Total de cosas: {{ todos.length }}</p>
  <ul>
    <todo-item
      v-for="(item, index) in todos"
      :key="item.id"
      :todo="item"
      @borrame="borrarItem"
    >
    </todo-item>
  </ul>
</template>
