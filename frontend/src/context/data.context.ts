import { createContext } from "preact";
import { useContext } from "preact/hooks";

export const DataContext = createContext({
    tasks: [],
    setTasks: (tasks: any[]) => { },
});

export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const API_URL = "http://localhost:4000";

export const useData = () => {
    const { tasks, setTasks } = useContext(DataContext);

    const getTasks = async () => {
        const response = await fetch(`${API_URL}/tasks`);
        const data = await response.json();
        setTasks(data.tasks);
        console.log(data.tasks);
    };
    const createTask = async (task: any) => {
        const response = await fetch(`${API_URL}/tasks`, {
            method: "POST",
            body: JSON.stringify(task),
        });
        const data = await response.json();
        setTasks([...tasks, data]);
    };
    const updateTask = async (task: Task) => {
        const response = await fetch(`${API_URL}/tasks/${task.id}`, {
            method: "PUT",
            body: JSON.stringify(task),
        });
        const data = await response.json();
        setTasks(tasks.map((t) => (t.id === task.id ? data : t)));
    };
    const deleteTask = async (id: number) => {
        const response = await fetch(`${API_URL}/tasks/${id}`, {
            method: "DELETE",
        });
        setTasks(tasks.filter((t) => t.id !== id));
    };

    return { tasks, getTasks, createTask, updateTask, deleteTask };
};
