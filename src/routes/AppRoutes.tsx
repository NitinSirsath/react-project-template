import { useEffect, ReactNode } from "react";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useAuthStore } from "../services/store/auth/authStore";
import SnackbarActions from "../components/toastMessage/SnackbarActions";
import BackdropLoader from "../components/loaders/BackdropLoader";
import AppLayout from "../components/layout/AppLayout";
import LoginPage from "./LoginPage/Index";
import HomePage from "./HomePage/Index";
import NotFoundPage from "./404Page/NotFoundPage";
import RegisterPage from "./RegisterPage/Index";

const AppRouter = () => {
  const { isLoggedIn } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn && location.pathname !== "/register") {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <AppLayout>
      <SnackbarActions />
      <BackdropLoader />
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <LoginPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoutes>
              <RegisterPage />
            </PublicRoutes>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
          }
        />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </AppLayout>
  );
};

interface RouteProps {
  children: ReactNode;
}

const ProtectedRoutes = ({ children }: RouteProps) => {
  const { isLoggedIn } = useAuthStore();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};

const PublicRoutes = ({ children }: RouteProps) => {
  const { isLoggedIn } = useAuthStore();

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default AppRouter;
