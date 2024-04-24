export function Todos() {
  const tarefas = [
    {todo: "acordar" },
    {todo: "tomar café" },
    {todo: "ir para a academia" },
    {todo: "colocar o lixo para fora" },
    {todo: "fazer o almoço" },
  ];

  return (
  <div>
    <h1>Todos de Prog  Web</h1>
    <form>
      <input type="text"/>
      <button type="submit"> Adicionar Tarefa </button>
    </form>
    <ul>
      {tarefas.map((tarefa, index) => (
        <li key={index}>{tarefa.todo}</li>
      ))}
    </ul>
  </div>
  );
}