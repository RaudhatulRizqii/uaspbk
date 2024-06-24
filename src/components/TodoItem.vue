<style scoped>
.todo-item {
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.todo-item:hover {
  transform: translateY(-3px);
}

.todo-item span {
  font-size: 1.2rem;
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
  padding: 0.5rem;
  border: 1px solid #ccc; 
  font-size: 1rem;
  border-radius: 3px;
  width: calc(100% - 22px);
  margin-right: 10px;
}

.button {
  display: flex;
  align-items: center;
}

.delete-btn,
.edit-btn,
.ok-btn {
  margin: 5px;
  padding: 0.5rem 1rem;
  color: #fff; 
  cursor: pointer;
  border-radius: 7px;
  font-size: 1rem;
  font-weight: 500;
}

.delete-btn {
  background-color: #e57373;
}

.edit-btn {
  background-color: #64b5f6; 
}

.ok-btn {
  background-color: #4db6ac;
}
</style>
