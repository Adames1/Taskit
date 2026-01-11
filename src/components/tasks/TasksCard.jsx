import { Circle, Trash2, CheckCircle2 } from "lucide-react";
import { markCompletedTask, deleteTask } from "../../services/db/tasks";
import { useAuth } from "../../hooks/useAuth";

function TasksCard({ task }) {
  const { user } = useAuth();

  return (
    <div className="py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <button
          onClick={() => markCompletedTask(user.uid, task.id, !task.completed)}
          type="button"
          className="cursor-pointer text-gray-500"
        >
          {task.completed ? (
            <CheckCircle2 size={20} className="text-blue-500" />
          ) : (
            <Circle size={20} />
          )}
        </button>
        <span
          className={`text-sm ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.taskname}
        </span>
      </div>

      <button
        onClick={() => deleteTask(user.uid, task.id)}
        type="button"
        className="cursor-pointer flex items-center gap-2 bg-red-500 text-white text-sm font-medium px-2.5 py-1.5 rounded-md"
      >
        <Trash2 size={20} />
        Eliminar
      </button>
    </div>
  );
}

export default TasksCard;
