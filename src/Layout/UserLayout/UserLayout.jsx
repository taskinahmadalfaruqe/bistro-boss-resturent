import { Outlet } from "react-router-dom";
const UserLayout = () => {
    return (
        <div className="font-Inter text-BlackColor">
            <Outlet></Outlet>
        </div>
    );
};

export default UserLayout;