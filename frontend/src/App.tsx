import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes, authRoutes } from "./Routes";
import { AuthLayout, LoggedInLayout } from "./utility/AuthLayout";
import './css/App.css';
import { Toaster } from 'react-hot-toast';
import {
  CSSTransition, SwitchTransition
} from "react-transition-group";

function App() {
  return (
    <div>
 <div className="">
      <div><Toaster position="top-right" reverseOrder={true} /></div>
      <BrowserRouter>
        <SwitchTransition>
          <CSSTransition
            classNames="fade"
            timeout={2000}
          >
            <Routes>
              {publicRoutes.map((route: any, index: any) => (
                <Route
                  key={index}
                  path={route.route}
                  element={<route.component />}
                />
              ))}
              {privateRoutes.map((route: any, index: any) => (
                <Route
                  key={index}
                  path={route.route}
                  element={
                    <AuthLayout >
                      <AuthLayout >
                        <route.component />
                      </AuthLayout >
                    </AuthLayout >
                  }
                />
              ))}
              {authRoutes.map((route: any, index: any) => (
                <Route
                  key={index}
                  path={route.route}
                  element={
                    <LoggedInLayout >
                      <route.component />
                    </LoggedInLayout >
                  }
                />
              ))}
            </Routes>
          </CSSTransition>
        </SwitchTransition>
        </BrowserRouter>
    </div>
    </div>
  );
}
export default App;
