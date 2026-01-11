import { taskSchema } from "../../utils/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTask } from "../../services/db/tasks";
import { useAuth } from "../../hooks/useAuth";

function TasksForm({ setIsOpenForm }) {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(taskSchema) });

  const onSubmit = async (data) => {
    await createTask(user.uid, data.taskname);

    reset();
  };

  return (
    <div className="absolute w-full max-w-md right-0 bg-white z-40 border rounded-md p-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-sm divide-y px-2 divide-gray-300"
      >
        <div className="py-2">
          <input
            type="text"
            id="taskname"
            placeholder="Titulo o nombre de tarea..."
            className="w-full outline-0 placeholder:text-gray-400 text-gray-700"
            {...register("taskname")}
          />
        </div>

        <div className="py-2 flex items-center gap-3 justify-end">
          <button
            onClick={() => setIsOpenForm(false)}
            type="button"
            className="bg-gray-200 text-gray-700 font-medium px-3 py-2 rounded-md cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-[#0051FF] text-white font-medium px-3 py-2 rounded-md cursor-pointer"
          >
            Agregar tarea
          </button>
        </div>
      </form>
    </div>
  );
}

export default TasksForm;
