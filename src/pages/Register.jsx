import { Link, useNavigate } from "react-router";
import { signUpSchema } from "../utils/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFirebase } from "../services/auth/auth";
import { toast } from "react-toastify";
import { createProfile } from "../services/profile/profiles";

import AuthLayout from "../layout/AuthLayout";
import Input from "../components/auth/Input";
import Button from "../components/auth/Button";

function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signUpSchema) });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const credential = await registerFirebase(data.email, data.password);

      // crear perfil usuario en firestore
      await createProfile(data.name, data.email, credential.user.uid);

      navigate("/");

      toast.success("Te has registrado correctamente!");

      reset();
    } catch (error) {
      console.log(error.message);

      if (error.code === "auth/email-already-in-use") {
        toast.error("El correo electronico ya esta en uso");
      } else {
        toast.error("Hubo un error al registrarte");
      }
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md mx-auto">
        <h2 className="font-semibold text-2xl text-gray-700 mb-8">
          Crea tu cuenta en Taskit!
        </h2>

        <div className="space-y-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                label="Nombre y Apellido"
                id="name"
                placeholder="Jhon Due"
                type="text"
                register={register}
              />
              {errors.name && (
                <span className="text-sm text-red-400">
                  {errors.name.message}
                </span>
              )}
            </div>

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

            <Button>Crear Cuenta</Button>
          </form>

          <p className="text-gray-600 text-center text-[15px]">
            ¿Tienes una cuenta?{" "}
            <Link
              to="/signin"
              className="font-medium text-[#0051FF] hover:underline transition"
            >
              Inicia sesion.
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Register;
