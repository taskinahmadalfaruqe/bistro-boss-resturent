import { Link } from 'react-router-dom';
import CommonButton from '../../Components/CommonButton/CommonButton';
import bgImage from '../../assets/others/authentication.png';
import loginImage from '../../assets/others/authentication2.png';
import { CiLogin } from 'react-icons/ci';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const LoginPage = () => {

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const getFormData = (e) => {
        e.preventDefault();
        const value = new FormData(e.target);
        const email = value.get('email');
        const password = value.get('password');
        const capcharCode = value.get('capcharCode');
        if (validateCaptcha(capcharCode) == true) {
            alert('Captcha Matched');
            console.log(email, password);
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Captur Doesn't Match",
                timer: 1500
              });
        }
    };

    return (
        <div
            className="flex justify-center items-center min-h-screen"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    <div className="text-center lg:text-left lg:w-1/2 lg:pr-10">
                        <h1 className="text-5xl font-bold text-PrimaryColor mb-4 text-center">Login now!</h1>
                        <img src={loginImage} alt="LoginImage" className="mx-auto lg:mx-0" />
                    </div>
                    <div className="card lg:w-1/2 mt-8 lg:mt-0">
                        <form className="card-body" onSubmit={getFormData}>
                            <div className="form-control">
                                <label className="label" htmlFor="email">
                                    <span className="label-text text-PrimaryColor text-xl">Email</span>
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label" htmlFor="password">
                                    <span className="label-text text-PrimaryColor text-xl">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                    name="password"
                                    id="password"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label" >
                                    <span className="label-text text-PrimaryColor text-xl">Capture</span>
                                </label>
                                <div className='w-full flex justify-center items-center border-dashed p-1 border-PrimaryColor border-[1px] rounded-md bg-white'>
                                    <LoadCanvasTemplate />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label" htmlFor="capcharCode">
                                    <span className="label-text text-PrimaryColor text-xl">Type The Capture</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type Here Abov Code"
                                    className="input input-bordered"
                                    required
                                    name="capcharCode"
                                    id="capcharCode"
                                />
                            </div>

                            <div className="text-center ">
                                <CommonButton
                                    btnText="Login"
                                    btnIcon={<CiLogin className="text-3xl font-bold" />}
                                ></CommonButton>
                            </div>
                        </form>
                        <div className="card-body pt-0 text-xl text-center ">
                            <div className="text-sm">New here?
                                <span className="text-BlackColor underline ml-2 hover:text-PrimaryColor">
                                    <Link to={'/signup'}>Create a New Account</Link>
                                </span>
                            </div>
                            <div className="font-bold">Or</div>
                            <div className="text-BlackColor flex justify-center lg:justify-start items-center flex-col lg:flex-row border-dashed rounded-md p-3 border border-PrimaryColor">
                                Login With
                                <div className="flex gap-5 justify-center lg:justify-between mx-auto p-3">
                                    <div className="w-10 h-10 rounded-full p-1 hover:text-PrimaryColor transition-all duration-300 hover:border-PrimaryColor cursor-pointer flex justify-center items-center border border-BlackColor text-2xl">
                                        <FaGoogle></FaGoogle>
                                    </div>
                                    <div className="w-10 h-10 rounded-full p-1 hover:text-PrimaryColor transition-all duration-300 hover:border-PrimaryColor cursor-pointer flex justify-center items-center border border-BlackColor text-2xl">
                                        <FaFacebook></FaFacebook>
                                    </div>
                                    <div className="w-10 h-10 rounded-full p-1 hover:text-PrimaryColor transition-all duration-300 hover:border-PrimaryColor cursor-pointer flex justify-center items-center border border-BlackColor text-2xl">
                                        <FaGithub></FaGithub>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
