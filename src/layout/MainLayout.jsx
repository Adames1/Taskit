import { useState } from "react";
import { LayoutGrid, Sparkles } from "lucide-react";
import Sidebar from "../components/navigation/Sidebar";
import iconLogo from "/images/icon-logo.svg";
import { useAuth } from "../hooks/useAuth";

function MainLayout({ children }) {
  const { profile } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const userName = profile.userName;

  return (
    <section className="flex h-screen">
      {/* componente sidebar y navegacion */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="w-full h-screen md:w-[calc(100%-288px)] ml-auto">
        {/* header layout */}
        <header className="h-16 px-6 md:px-8 flex items-center justify-between bg-white">
          <img src={iconLogo} alt="Icon logo" className="md:hidden" />
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="cursor-pointer text-gray-600 md:hidden"
          >
            <LayoutGrid size={30} />
          </button>

          <h2 className="hidden md:flex ml-auto gap-2 items-center">
            <Sparkles size={24} className="text-orange-300" />{" "}
            <span className="text-gray-600 font-medium cursor-default">
              {`Bienvenido ${userName}`}
            </span>
          </h2>
        </header>

        {/* contenido principal */}
        <main className="w-full h-[calc(100%-64px)] px-6 md:px-8 py-6 space-y-4 divide-y divide-gray-200">
          {children}
        </main>
      </div>
    </section>
  );
}

export default MainLayout;
