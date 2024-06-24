<template>
  <div class="todo-list">
    <h2>To Do List</h2>
    <TodoInput
      :newTodo="newTodo"
      :showCompleted="showCompleted"
      @update:newTodo="updateNewTodo"
      @addTodo="addTodo"
      @toggleCompletedFilter="toggleCompletedFilter"
    />
    <TodoList
      :todos="todos"
      :showCompleted="showCompleted"
      @editTodo="editTodo"
      @saveTodo="saveTodo"
      @removeTodo="removeTodo"
    />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useTodoStore } from "../stores/todoStore.js";
import TodoInput from "../components/TodoInput.vue";
import TodoList from "../components/TodoList.vue";

const todoStore = useTodoStore();
const { newTodo, todos, showCompleted } = storeToRefs(todoStore);
const {
  updateNewTodo,
  addTodo,
  removeTodo,
  editTodo,
  saveTodo,
  toggleCompletedFilter,
} = todoStore;
</script>


<style scoped>
.todo-list {
  margin: 3rem auto;
  padding: 50px;
  max-width: 1000px;
  background-color: #f0f3f8;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);


}

h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #7691dd; 
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

input[type="text"], button {
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid #b0a8ff;
  background-color: #ffffff;
}

button {
  background-color: #6db3f2; 
  color: #ffffff; 
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #5c99d2;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #ffffff; 
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

li.completed {
  background-color: #d4f0cf; 
  text-decoration: line-through; 
}


</style>
