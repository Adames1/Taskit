import { getTasksByUser } from "../services/db/tasks";
import { useEffect, useState, createContext } from "react";
import { useAuth } from "../hooks/useAuth";

export const TasksContext = createContext();

function TasksProvider({ children }) {
  const { user, loading: authLoading } = useAuth();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      setTasks([]);
      setLoading(false);
      return;
    }

    const unsubscribe = getTasksByUser(user.uid, setTasks, setLoading);

    return () => unsubscribe && unsubscribe();
  }, [user, authLoading]);

  return (
    <TasksContext.Provider value={{ tasks, loading }}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
