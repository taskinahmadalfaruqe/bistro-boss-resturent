import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div>
            <div className="container">
                <div className="flex gap-5 justify-between items-center">
                    <div>
                        <img src={logo} alt="siteLogo" className="w-16" />
                    </div>
                    <div>Items</div>
                    <div>bars</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;