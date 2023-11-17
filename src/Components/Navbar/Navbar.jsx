
// import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";
// eslint-disable-next-line no-unused-vars
import { FaShoppingCart } from 'react-icons/fa';
// import useCart from "../../../hooks/useCart";

const Navbar = () => {
    const navigate= useNavigate();

    // const { user, logOut } = useContext(AuthContext);
    // const [cart] = useCart();

    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => { })
    //         .catch(error => console.log(error));
    // }

    const navOptions = <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/menu">Our Menu</NavLink>
        </li>
        <li>
            <NavLink to="/order/salad">Order Food</NavLink>
        </li>
        <li>
            <NavLink to="/secret">Secret</NavLink>
        </li>
        <li>
            <NavLink to="/signUp">Sign UP</NavLink>
        </li>
        <li>
            <NavLink to="/login">Login</NavLink>
        </li>
    </>
    // const navOptions = <>
    //     <li><NavLink to="/">Home</NavLink></li>
    //     <li><NavLink to="/menu">Our Menu</NavLink></li>
    //     <li><NavLink to="/order/salad">Order Food</NavLink></li>
    //     <li><NavLink to="/secret">Secret</NavLink></li>
    //     <li>
    //         <NavLink to="/dashboard/cart">
    //             <button className="btn">
    //                 <FaShoppingCart className="mr-2"></FaShoppingCart>
    //                 <div className="badge badge-secondary">+{cart.length}</div>
    //             </button>
    //         </NavLink>
    //     </li>
    //     {
    //         user ? <>
    //             {/* <span>{user?.displayName}</span> */}
    //             <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
    //         </> : <>
    //             <li><NavLink to="/login">Login</NavLink></li>
    //         </>
    //     }
    // </>

    return (
        <div className="navbar  z-10 bg-opacity-30  bg-black text-white sticky top-0 left-0">
            <div className="container mx-auto font-Cinzel">
                <div className="navbar-start">
                    <div className="dropdown hidden xl:flex">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="flex flex-col w-fit cursor-pointer" onClick={()=> navigate('/')}>
                        <span className="text-3xl">Bistro Boss</span>
                        <span className="text-xl tracking-[9px]">Resturent</span>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

