import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="text-center text-WhiteColor ">
            <div className="flex flex-col md:flex-row">
                <div className="flex-1 bg-LightBlackColor py-24 space-y-5">
                    <h2 className="text-2xl font-semibold uppercase">CONTACT US</h2>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00 </p>
                </div>
                <div className="flex-1 bg-DeepBlackColor py-24 space-y-5">
                    <h2 className="text-2xl font-semibold uppercase">Follow US</h2>
                    <p>Join us on social media</p>
                    <div className="flex justify-center items-center gap-5">
                        <div className="border border-WhiteColor text-2xl rounded-full h-12 w-12 flex justify-center items-center hover:text-PrimaryColor hover:border-PrimaryColor cursor-pointer transition-all duration-200 hover:scale-110">
                            <Link
                                to={'/'}>
                                <FaFacebook></FaFacebook>
                            </Link>
                        </div>
                        <div className="border border-WhiteColor text-2xl rounded-full h-12 w-12 flex justify-center items-center hover:text-PrimaryColor hover:border-PrimaryColor cursor-pointer transition-all duration-200 hover:scale-110">
                            <Link
                                to={'/'}>
                                <FaInstagram></FaInstagram>
                            </Link>
                        </div>
                        <div className="border border-WhiteColor text-2xl rounded-full h-12 w-12 flex justify-center items-center hover:text-PrimaryColor hover:border-PrimaryColor cursor-pointer transition-all duration-200 hover:scale-110">
                            <Link
                                to={'/'}>
                                <FaTwitter></FaTwitter>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-BlackColor py-5">
                <p>Copyright &copy; Bistro Boss Resturent. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;