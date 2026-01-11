import { TasksContext } from "../context/TasksContext";
import { useContext } from "react";

export const useTasks = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }

  return {
    tasks: context.tasks,
    loading: context.loading,
  };
};
