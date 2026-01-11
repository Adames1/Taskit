import emptynodata from "/images/empty-no-data.svg";

function EmptyState() {
  return (
    <div className="space-y-4 text-center w-full max-w-sm">
      <img
        src={emptynodata}
        alt="Draw para estados vacios"
        className="w-50 h-50 mx-auto"
      />
      <p className="text-gray-500">
        No tienes tareas agregadas. Presiona el boton{" "}
        <span className="text-blue-600 underline font-medium">Nueva tarea</span>{" "}
        para agregar.
      </p>
    </div>
  );
}

export default EmptyState;
