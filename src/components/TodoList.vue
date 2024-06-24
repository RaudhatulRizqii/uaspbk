<template>
  <table class="todo-table">
    <thead>
      <tr>
        <th>Completed</th>
        <th>To Do</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(todo, index) in filteredTodos" :key="index" class="todo-item">
        <td>
          <input
            class="todo-checkbox"
            type="checkbox"
            v-model="todo.completed"
          />
        </td>
        <td>
          <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
          <input
            v-if="todo.editing"
            v-model="todoEditText"
            @keyup.enter="saveTodoOnEnter(index)"
            @blur="saveTodo(index)"
            class="edit-input"
          />
        </td>
        <td class="button">
          <button
            v-if="!todo.editing"
            @click="editTodo(index)"
            class="edit-btn"
          >
            Edit
          </button>
          <button v-if="todo.editing" @click="saveTodo(index)" class="ok-btn">
            OK
          </button>
          <button @click="removeTodo(index)" class="delete-btn">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  todos: {
    type: Array,
    required: true,
  },
  showCompleted: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["editTodo", "saveTodo", "removeTodo"]);

const todoEditText = ref("");

const filteredTodos = computed(() => {
  if (props.showCompleted) {
    return props.todos;
  } else {
    return props.todos.filter((todo) => !todo.completed);
  }
});

const editTodo = (index) => {
  emit("editTodo", index);
};

const saveTodoOnEnter = (index) => {
  emit("saveTodo", index, todoEditText.value);
};

const saveTodo = (index) => {
  emit("saveTodo", index, todoEditText.value);
};

const removeTodo = (index) => {
  emit("removeTodo", index);
};

watch(filteredTodos, (newVal) => {
  newVal.forEach((todo) => {
    if (todo.editing) {
      todoEditText.value = todo.text;
    }
  });
});
</script>

<style scoped>
.todo-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.todo-table th,
.todo-table td {
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
}

.todo-table th {
  background-color: #4db6ac; 
  color: #fff; 
  font-weight: bold;
}

.todo-item {
  background-color: #fff; 
  transition: background-color 0.3s ease;
}

.todo-item:hover {
  background-color: #f0f0f0;
}

.todo-checkbox {
  width: 20px;
  height: 20px;
}

.todo-item span {
  font-size: 1rem;
  font-weight: 600;
  color: #333; 
  display: inline-block;
  width: 100%;
  padding: 0.5rem 0;
}

.completed {
  text-decoration: line-through;
  color: #888;
}

.edit-input {
  padding: 8px;
  border: 1px solid #ccc; 
  font-size: 1rem;
  border-radius: 3px;
  width: calc(100% - 22px);
  margin-right: 10px;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-btn,
.edit-btn,
.ok-btn {
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 500;
}

.delete-btn {
  background-color: #f44336; 
  color: #fff; 
}

.edit-btn {
  background-color: #1e5ceb;
  color: #fff;
  margin-right: 5px;
}

.ok-btn {
  background-color: #008cba;
  color: #fff; 
}
</style>
