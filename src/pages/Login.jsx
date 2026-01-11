import { Link, useNavigate } from "react-router";
import { signInSchema } from "../utils/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFirebase } from "../services/auth/auth";
import { toast } from "react-toastify";

import AuthLayout from "../layout/AuthLayout";
import Input from "../components/auth/Input";
import Button from "../components/auth/Button";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signInSchema) });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await loginFirebase(data.email, data.password);
      navigate("/");

      toast.success("Haz iniciado sesion!");

      reset();
    } catch (error) {
      // verificar errores para desarrollo
      console.log(error.code);

      toast.error("Hubo un error al registrarte!");
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md mx-auto">
        <h2 className="font-semibold text-2xl text-gray-700 mb-8">
          Bienvenido a Taskit!
        </h2>

        <div className="space-y-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                label="Correo electronico"
                id="email"
                placeholder="jhondue@email.com"
                type="email"
                register={register}
              />
              {errors.email && (
                <span className="text-sm text-red-400">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <Input
                label="Contraseña"
                id="password"
                placeholder="Minimo 6 caracteres"
                type="password"
                register={register}
              />
              {errors.password && (
                <span className="text-sm text-red-400">
                  {errors.password.message}
                </span>
              )}
            </div>

            <Button>Iniciar Sesion</Button>
          </form>

          <p className="text-gray-600 text-center text-[15px]">
            ¿No tienes una cuenta?{" "}
            <Link
              to="/signup"
              className="font-medium text-[#0051FF] hover:underline transition"
            >
              Registrate aqui.
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Login;
