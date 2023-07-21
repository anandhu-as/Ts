import React, { FC, useState, ChangeEvent } from 'react';
import { Itask } from './Interfaces';

const App: React.FC = () => {
  const [task, setTask] = useState<String>("");
  const [todo, setTodo] = useState<Itask[]>([]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => setTask(event.target.value)
  const handleClick = (): void => {
    const newTodo = { name: task };
    setTodo([...todo, newTodo])
  }
  return (
    <div className="App">
      <div className="header">
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Add task...</button>
        <h1>{todo}</h1>
      </div>
    </div>
  );
};

export default App;
