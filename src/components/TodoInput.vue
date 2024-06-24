<template>
  <div class="input-container">
    <q-input
      class="todo-input"
      v-model="localNewTodo"
      @keyup.enter="addTodo"
      placeholder="Tambahkan Todo Baru"
      outlined
      dense
      clearable
      input-class="custom-input"
      style="background-color: #f0f0f0; border-radius: 5px; color: #333"
    />
    <q-btn
      @click="addTodo"
      class="submit-btn"
      label="Add"
      color="positive"
      style="background-color: #7691dd; color: #fff; margin-left: 10px"
    />
    <q-btn
      @click="toggleCompletedFilter"
      class="filter-btn"
      :label="showCompleted ? 'Hide' : 'Show'"
      style="background-color: #7691dd; color: #fff; margin-left: 10px"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { QInput, QBtn } from "quasar";

const props = defineProps({
  newTodo: {
    type: String,
    required: true,
  },
  showCompleted: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits([
  "update:newTodo",
  "addTodo",
  "toggleCompletedFilter",
]);

const localNewTodo = ref(props.newTodo);

watch(
  () => props.newTodo,
  (newVal) => {
    localNewTodo.value = newVal;
  }
);

const addTodo = () => {
  if (localNewTodo.value.trim() !== "") {
    emit("addTodo", localNewTodo.value);
    emit("update:newTodo", "");
  }
};

const toggleCompletedFilter = () => {
  emit("toggleCompletedFilter");
};
</script>

<style scoped>
.input-container {
  display: block;
  align-items: center;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  margin-right: 5px;
  border-radius: 5px;
  margin: 10px;
  background-color: #4db6ac;
}

.custom-input {
  padding: 0.5rem;
  font-size: 1rem;
  color: #333; 
}

.submit-btn,
.filter-btn {
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 7px;
  font-size: 14px;
}

.submit-btn {
  background-color: #4db6ac;
}

.filter-btn {
  background-color: #ffb74d;
  margin-left: 10px;
}
</style>
