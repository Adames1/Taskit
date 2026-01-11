import imgWorking from "/images/draw-working.svg";

function WorkDev() {
  return (
    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
      <img src={imgWorking} alt="Estamos trabajando..." className="w-50 h-50" />
      <p className="text-center text-gray-500 text-lg">
        Pagina o modulo en proceso de desarrollo...
      </p>
    </div>
  );
}

export default WorkDev;
