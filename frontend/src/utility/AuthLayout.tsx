import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { showToast } from "../dashboard/partials/Toaster"
export const AuthLayout = ({ children }: any) => {
    const navigate = useNavigate();
    const LoggedIn = localStorage.getItem("User")
    useEffect(() => {
        if (!LoggedIn) {
            const message = "You need to login to see this route";
            showToast(message, "warn")
            navigate("/");
        }
    }, [navigate]);
    return (
        <div className="auth-layout">
            <div className="nav-box">
            </div>
            <div className="cont-box">
                {children}
            </div>
        </div>
    )
}
export const LoggedInLayout = ({ children }: any) => {
    const navigate = useNavigate();
    const LoggedIn = localStorage.getItem("User")
    useEffect(() => {
        if (LoggedIn) {
            const message = "You are already logged in";
            showToast(message, "warn")
            navigate("/dashboard");
        }
    }, [navigate]);
    return (
        <div className="auth-layout">
            <div className="nav-box">
            </div>
            <div className="cont-box">
                {children}
            </div>
        </div>
    )
}
