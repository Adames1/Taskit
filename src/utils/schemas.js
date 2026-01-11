import z from "zod";

// validaciones para el formulario con zod

// validaciones para iniciar sesion
export const signInSchema = z.object({
  email: z.string().email("Por favor ingrese un correo electrónico válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

// validaciones para registro
export const signUpSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("Por favor ingrese un correo electrónico válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export const taskSchema = z.object({
  taskname: z.string().min(1),
});
