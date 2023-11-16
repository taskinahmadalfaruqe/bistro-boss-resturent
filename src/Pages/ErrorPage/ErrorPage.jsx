import { useNavigate } from "react-router-dom";
import errorImage from "../../assets/404.gif";
import { IoHome } from "react-icons/io5";
import CommonButton from "../../Components/CommonButton/CommonButton";

const ErrorPage = () => {
    const navigte = useNavigate();
    

    return (
        <div className="flex justify-center items-center gap-5 flex-col">
            <div className="my-10">
                <img src={errorImage} alt="errorPage" className="max-w-[550px] " />
            </div>
            <div onClick={()=> navigte('/')}>
                <CommonButton  btnText="Go TO Home" btnIcon={<IoHome></IoHome>}> </CommonButton>
            </div>
        </div>
    );
};

export default ErrorPage;