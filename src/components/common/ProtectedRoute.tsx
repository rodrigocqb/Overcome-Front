import useToken from "hooks/useToken";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({
  noTokenPath = "/sign-in",
  children,
}: {
  noTokenPath?: string;
  children?: React.ReactElement;
}) {
  const token = useToken();

  if (!token) {
    return (
      <Navigate
        to={noTokenPath}
        replace
      />
    );
  }

  return children ? children : <Outlet />;
}
