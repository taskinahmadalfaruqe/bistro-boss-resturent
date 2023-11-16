import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/Navbar/Navbar";

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
            <Navbar></Navbar>
        </div>
    );
};

export default HomePage;