import { Outlet } from "react-router-dom";
const UserLayout = () => {
    return (
        <div className="font-Cinzel text-BlackColor">
            <Outlet></Outlet>
        </div>
    );
};

export default UserLayout;