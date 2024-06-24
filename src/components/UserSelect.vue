<template>
  <div class="user-select">
    <label for="user">Pilih User: </label>
    <select id="user" v-model="selectedUser" @change="handleChange">
      <option :value="null">Semua User</option>
      <option v-for="user in users" :key="user.id" :value="user.id">
        {{ user.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  users: {
    type: Array,
    required: true,
  },
  selectedUser: {
    type: [Number, null],
    required: true,
  },
});

const emit = defineEmits(["update:selectedUser"]);

const selectedUser = ref(props.selectedUser);

watch(selectedUser, (newValue) => {
  emit("update:selectedUser", newValue);
});

const handleChange = (event) => {
  const selectedValue = parseInt(event.target.value);
  selectedUser.value = selectedValue;
};
</script>

<style scoped>
label {
  font-size: 1.2rem;
}
select {
  appearance: none;
  -webkit-appearance: none;
  font-size: 1rem;
  padding: 8px; 
  background-color: #fff;
  border: 1px solid #caced1;
  border-radius: 0.25rem;
  color: #000;
  cursor: pointer;
}
</style>
