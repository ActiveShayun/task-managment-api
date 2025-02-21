import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Nabvar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-5xl mx-auto px-5">
           <Navbar/>
           <Outlet/>
        </div>
    );
};

export default MainLayout;