import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }

  return {
    user: context.user,
    profile: context.profile,
    loading: context.loading,
  };
}
