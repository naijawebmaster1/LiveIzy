import {Home} from "./pages";
import Dashboard from "./dashboard/screens/home/Dashboard";
import Login from "./dashboard/auth/Login";
import Register from "./dashboard/auth/Register";
import {Test} from "./Test"
import PageNotFound from "./404"
export const publicRoutes = [
  { route: "/login", component: Home },
  { route: "/test", component: Test },
  { route: "*", component: PageNotFound },
];
export const privateRoutes = [
  { route: "/dashboard", component: Dashboard },
];
export const authRoutes = [
  { route: "/", component: Login },
  { route: "/register", component: Register },
];
