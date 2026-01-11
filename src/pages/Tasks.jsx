import { useState } from "react";
import { Plus } from "lucide-react";
import { useTasks } from "../hooks/useTasks";
import MainLayout from "../layout/MainLayout";
import EmptyState from "../components/common/EmptyState";
import TasksForm from "../components/tasks/TasksForm";
import TasksCard from "../components/tasks/TasksCard";

function Tasks() {
  const { tasks } = useTasks();
  const [isOpenForm, setIsOpenForm] = useState(false);

  return (
    <MainLayout>
      <div className="flex items-center justify-between pb-4">
        <h1 className="text-xl font-semibold text-gray-600">TAREAS</h1>

        <button
          onClick={() => setIsOpenForm(true)}
          type="button"
          className="flex items-center gap-2 bg-[#0051FF] text-white text-sm rounded-md px-4 py-2.5 font-medium cursor-pointer"
        >
          <Plus size={20} />
          <span className="sr-only md:not-sr-only">Nueva Tarea</span>
        </button>
      </div>

      <div className="w-full h-[calc(100%-70px)] max-w-4xl mx-auto relative">
        {/* formulario para agregar tareas */}
        {isOpenForm && <TasksForm setIsOpenForm={setIsOpenForm} />}

        {tasks.length > 0 ? (
          <div className="flex flex-col divide-y divide-gray-200">
            {tasks.map((task, index) => (
              <TasksCard key={index} task={task} />
            ))}
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <EmptyState />
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default Tasks;
