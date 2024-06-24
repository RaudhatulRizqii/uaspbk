// stores/todoStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore("todo", () => {
  const newTodo = ref("");
  const todos = ref([]);
  const showCompleted = ref(true);

  const updateNewTodo = (value) => {
    newTodo.value = value;
  };

  const addTodo = (todoText) => {
    if (todoText.trim() !== "") {
      todos.value.push({
        text: todoText,
        completed: false,
        editing: false,
      });
      newTodo.value = ""; 
    }
  };

  const removeTodo = (index) => {
    todos.value.splice(index, 1);
  };

  const editTodo = (index) => {
    todos.value[index].editing = true;
  };

  const saveTodo = (index, text) => {
    if (text.trim() !== "") {
      todos.value[index].text = text;
      todos.value[index].editing = false;
    } else {
      removeTodo(index);
    }
  };

  const toggleCompletedFilter = () => {
    showCompleted.value = !showCompleted.value;
  };

  return {
    newTodo,
    todos,
    showCompleted,
    updateNewTodo,
    addTodo,
    removeTodo,
    editTodo,
    saveTodo,
    toggleCompletedFilter,
  };
});
