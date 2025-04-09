import { useState } from 'preact/hooks';

export function Home() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset role="group">
          <input
            type="text"
            name="task"
            placeholder="Enter your task"
            autocomplete="task"
            value={task}
            onInput={(e) => setTask(e.currentTarget.value)}
          />

          <input type="submit" value="Add Task" />
        </fieldset>
      </form>
      {/* // make this article which is card to loop through array of string  */}
      {tasks.map((task) => (
        <article>{task}</article>
      ))}
    </div>
  );
}
