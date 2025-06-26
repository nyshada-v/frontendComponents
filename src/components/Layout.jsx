import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <div className="layout">
            <Navbar />
            <Outlet />
            <footer className="footer">
                <p>&copy; 2023 My Application</p>
            </footer>
        </div>
    );
}
