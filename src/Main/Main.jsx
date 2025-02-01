import { Outlet } from "react-router";
import Sidebar from "./Shared/Sidebar";

const Main = () => {
    return (
        <div className="flex">
            <div className="ml-20 mt-7"><Sidebar></Sidebar></div>
            <div className="flex-1"><Outlet></Outlet></div>
        </div>
    );
};

export default Main;