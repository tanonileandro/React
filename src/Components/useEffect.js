import { useState, useEffect } from 'react';

function TodoList() {
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        const completedTodos = data.filter((todo) => todo.completed);
        setCompletedTodos(completedTodos);
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h1>Lista de Tareas Completadas</h1>
      <ul>
        {completedTodos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
