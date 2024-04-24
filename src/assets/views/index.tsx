export function Todos() {
  const tarefas = [
    {todo: "acordar" },
    {todo: "acordar" },
    {todo: "acordar" },
    {todo: "acordar" },
    {todo: "acordar" },
  ];

  return (
  <div>
    <h1>Todos de Prog  Web</h1>
    <form>
      <input type="text"/>
      <button type ="submit"> Adicionar
    </form>
    <ul>
      <li>Tarefas 1</li>
      <li>Tarefas 2</li>
      <li>Tarefas 3</li>
      <li>Tarefas 4</li>
    </ul>
  </div>
  );
}