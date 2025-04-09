import { useEffect, useState } from 'preact/hooks';
import { Task, useData } from '../context/data.context';

export function Home() {
  const { tasks, getTasks, createTask, updateTask, deleteTask } = useData();
  const [task, setTask] = useState<Task>({
    id: 0,
    title: '',
    completed: false,
  });

  useEffect(() => {
    getTasks();
  }, []);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    createTask({ title: task.title });
    setTask({ id: 0, title: '', completed: false });
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
            value={task.title}
            onInput={(e) => setTask({ ...task, title: e.currentTarget.value })}
          />

          <input type="submit" value="Add Task" />
        </fieldset>
      </form>
      <div class="tasks-list">
        {tasks.map((task) => (
          <article key={task.id} class="task-item">
            <hgroup>
              <h2>{task.title}</h2>
              <ins
                onClick={() =>
                  updateTask({ ...task, completed: !task.completed })
                }
              >
                {task.completed ? 'Status: Completed' : 'Status: Pending'}
              </ins>
            </hgroup>
            <footer>
              <a href="#" onClick={() => deleteTask(task.id)}>
                Delete
              </a>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
