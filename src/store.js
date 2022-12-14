import axios from "axios";
import { reactive } from "vue";
const url = 'http://localhost:3000'
let id = 0;
export const store = {
    debug: true,
    state: reactive({
        todos: [],
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
            this.state.todos.splice(0, this.state.todos.length)
        }
    },

    borrarItem(id) {
        let position = this.state.todos.findIndex((element) => element.id === id);
        this.state.todos.splice(position, 1);
    },

    async addTodoInServer(newValue) {
        try {
            var response = await axios.post(url + "/todos", {
                title: newValue,
                done: false
            })
            this.state.todos.push(
                response.data
            )

        } catch (error) {
            alert('Error: no se ha añadido el registro. ' + response.message);
        }

    },

    async delItemInServer(id) {
        try {
            var response = await axios.delete(url + "/todos/" + id)
            let position = this.state.todos.findIndex((element) => element.id === id);
            this.state.todos.splice(position, 1);
        } catch (error) {
            alert('Error: no se ha borrado el registro. ' + response.message);
        }
    },

    delTodosInServer() {
        this.state.todos.forEach(todo => {
            this.delItemInServer(todo.id)
        });
    },

    async listarTodosInServer() {
        try {
            var response = await axios.get(url + "/todos")
            response.data.forEach(todo => { this.state.todos.push(todo) })
        } catch (error) {
            alert('Error: no se ha mostrado los registros. ' + response.message);
        }
    },

    async cambiarDone(todo) {
        try {
            var response = await axios.patch(url + "/todos/" + todo.id, {
                done: !todo.done
            })
            
            todo.done = !todo.done
        } catch (error) {
            alert('Error: no se ha cambiado el done. ' + response.message);
        }
    }
}
