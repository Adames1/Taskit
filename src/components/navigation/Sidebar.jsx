import { logoutFirebase } from "../../services/auth/auth";
import { House, ListChecks, ArchiveRestore, LogOut, X } from "lucide-react";
import logo from "/images/Logo.svg";
import Link from "./Link";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <aside
      className={`fixed inset-0 z-40 w-full h-screen p-8 space-y-6 md:w-72 bg-white md:bg-[#FCFAF8] md:translate-x-0 -translate-x-full transition ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <img src={logo} />
        <button
          onClick={() => setIsOpen(false)}
          type="button"
          className="cursor-pointer md:hidden text-gray-500"
        >
          <X size={30} />
        </button>
      </div>

      <div className="w-full h-[calc(100%-45px)] flex flex-col">
        <nav className="flex-1 flex flex-col gap-4">
          <Link namePage="Inicio" iconPage={<House size={19} />} toPage="/" />
          <Link
            namePage="Tareas"
            iconPage={<ListChecks size={19} />}
            toPage="/tasks"
          />
          <Link
            namePage="Archivados"
            iconPage={<ArchiveRestore size={19} />}
            toPage="/archived"
          />
        </nav>

        <button
          onClick={() => logoutFirebase()}
          type="button"
          className="flex items-center max-w-max mx-auto text-sm justify-center gap-2 text-gray-700 py-3 px-6 bg-gray-200 rounded-md cursor-pointer hover:bg-red-400 hover:text-white transition"
        >
          <LogOut size={19} />
          Cerrar Sesion
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
