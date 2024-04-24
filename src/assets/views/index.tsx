import { useState } from "react";

interface Todo {
  todo: string;
}
export function Todos() {
  const tarefas = [
    {todo: "acordar" },
    {todo: "tomar café" },
    {todo: "ir para a academia" },
    {todo: "colocar o lixo para fora" },
    {todo: "fazer o almoço" },
  ];

const [todos, setTodos] = useState<Todo[]>([]);
const [form, setForm] = useState<Todo>({ todo: "" });
console.log("🚀 ~ Todos `form:", form.todo);

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
    <form onSubmit={handleSubmit}>
      <input type="text" 
      name="todo" 
      value={form.todo}
      placeholder="Sua melhor tarefa"
      onChange={handleInputChange}
      />
      <button type="submit"> Adicionar Tarefa </button>
    </form>
    <ul>
      {todos.map((tarefa, index) => (
        <li key={index}>{tarefa.todo}</li>
      ))}
    </ul>
  </div>
  );
}