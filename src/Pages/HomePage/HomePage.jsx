import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/Navbar/Navbar";
import BannerComponent from "../../Components/Banner/BannerComponent";

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <Navbar></Navbar>
            <BannerComponent></BannerComponent>
        </div>
    );
};

export default HomePage;