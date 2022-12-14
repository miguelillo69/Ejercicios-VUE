import { reactive } from "vue";
let id = 0;
export const store = {
    debug: true,
    state: reactive({
        todos: [
            {
                id: id++,
                title: 'Primera cosa',
                done: false,
            },
            {
                id: id++,
                title: 'Segunda cosa',
                done: false,
            },
            {
                id: id++,
                title: 'Tercera cosa',
                done: false,
            },
            {
                id: id++,
                title: 'Cuarta cosa',
                done: false,
            },
        ],
    }),

    addTodo(newValue) {
        this.state.todos.push({
            id: id++,
            title: newValue,
            done: false
        })
    },

    delTodos() {
        let confirmar = confirm("Quiere borrar todas las cosas");
        if (confirmar) {
            this.state.todos.splice(0,this.state.todos.length)
        }
    },

    borrarItem(id) {
        let position = this.state.todos.findIndex((element) => element.id === id);
        this.state.todos.splice(position,1);
      },
}

