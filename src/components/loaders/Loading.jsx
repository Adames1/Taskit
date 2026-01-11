import { Loader2 } from "lucide-react";

function Loading() {
  return (
    <div className="absolute inset-0 bg-white z-50 flex items-center justify-center">
      <span className="flex items-center justify-center gap-2 font-medium text-blue-500">
        <Loader2 size={40} className="animate-spin" /> Cargando...
      </span>
    </div>
  );
}

export default Loading;
