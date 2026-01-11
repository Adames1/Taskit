import imgLayout from "/images/patternpad-layout.svg";
import logo from "/images/Logo.svg";

function AuthLayout({ children }) {
  return (
    <section className="min-h-screen flex">
      <div className="w-full h-screen md:w-[50vw] p-8 flex flex-col gap-6">
        <header>
          <img src={logo} alt="logo taskit" />
        </header>

        <div className="flex-1 flex flex-col justify-center space-y-4">
          {children}
        </div>
      </div>

      <div className="hidden h-screen md:block w-[50vw]">
        <img src={imgLayout} alt="image layout" className="w-full h-full" />
      </div>
    </section>
  );
}

export default AuthLayout;
