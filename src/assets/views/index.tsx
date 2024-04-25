import { useState } from "react";
import { PiTrashBold } from "react-icons/pi";
import './styles.css'

interface Todo {
  todo: string;}

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

  const handleRemoveTodo = (index) => {
  const newTodos = todos.filter((_,idx) => idx !== index);
  setTodos(newTodos);
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
      {todos.length > 0 ? (
        todos.map((tarefa, index) => (
          <div key={index} className="todo-item">
            <span>{tarefa.todo}</span>
            <button onClick={() => handleRemoveTodo(index) }>
            <PiTrashBold />
            </button>
          </div>  
        ))
      ) : (
        <div>
          <span>Não existem tarefas para serem excluidas</span>
        </div>
      )}  
    </div>
  </div>
  );
}