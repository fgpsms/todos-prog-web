import { useState } from "react";
import { PiTrashBold } from "react-icons/pi";
import './styles.css'

interface Todo {
  todo: string;
}
export function Todos() {

const [todos, setTodos] = useState<Todo[]>([]);
const [form, setForm] = useState<Todo>({ todo: "" });

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setForm({  ... form, [name]: value});
};
const handleSubmit = (event) => {
  event.preventDefault();
  if (form.todo) {
    setTodos([form, ... todos]);
    setForm
  }
}

return (
  <div>
    <h1>Todos de Prog  Web</h1>
    <form onSubmit={handleSubmit}className="form-todo">
      <input type="text" 
      name="todo" 
      value={form.todo}
      placeholder="Sua melhor tarefa"
      onChange={handleInputChange}
      />
      <button type="submit"> Adicionar Tarefa </button>
    </form>
    <div className="todo-list">
      {todos.map((tarefa, index) => (
        <div key={index} className="todo-item">
        <span>{tarefa.todo}</span>
        <button>
          <PiTrashBold />
        </button>
        </div>
      ))}
    </div>
  </div>
  );
}