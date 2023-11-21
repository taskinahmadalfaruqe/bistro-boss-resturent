import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/Navbar/Navbar";
import BannerComponent from "../../Components/Banner/BannerComponent";
import OnlineOrder from "../../Components/OnlineOrder/OnlineOrder";
import Footer from "../../Components/Footer/Footer";
import Category from "../../Components/Category/Category";

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <BannerComponent></BannerComponent>
            </div>
            <div className="mt-10 md:mt-14">
                <OnlineOrder></OnlineOrder>
            </div>
            <div>
                <Category></Category>
            </div>
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default HomePage;