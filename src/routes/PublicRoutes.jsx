import { useAuth } from "../hooks/useAuth";
import { Outlet, Navigate } from "react-router";
import Loading from "../components/loaders/Loading";

function PublicRoutes() {
  const { user, loading } = useAuth();

  if (loading) return <Loading />;

  return !user ? <Outlet /> : <Navigate to="/" replace />;
}

export default PublicRoutes;
