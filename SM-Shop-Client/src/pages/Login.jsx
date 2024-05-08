import { MdOutlineMarkEmailRead } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero register_img min-h-screen bg-base-200">
            <div className="hero-content w-[95%] md:w-4/5 mx-auto flex-col lg:flex-row">
                <div className="text-center lg:text-left text-white">
                    <div
                        className="">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="w-full"
                            alt="Phone image" />
                    </div>
                </div>
                <div className="card shrink-0 w-full lg:max-w-[50%] shadow-2xl bg-base-100">
                    <div className="px-10 pt-14">
                        <div className="flex flex-row items-center justify-center lg:justify-start">
                            <p className="mb-0 me-4 text-lg">Sign in with</p>
                            <button type="button" data-twe-ripple-init data-twe-ripple-color="light" className="p-3 border border-white bg-black rounded-full">
                                <span className="[&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2443" height="2500" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
                                </span>
                            </button>
                        </div>


                        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                            <p className="mx-4 mb-0 text-center font-semibold text-black">Or</p>
                        </div>
                    </div>
                    <form className="card-body pt-0">
                        <div>
                            <h2 className="text-center text-3xl font-bold">Log-In Form</h2>
                        </div>
                        <div>
                            <label className="text-xs block mb-2">Email</label>
                            <div className="relative flex items-center">
                                <input name="email" type="email" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter Your Email" />
                                <MdOutlineMarkEmailRead className="text-3xl absolute right-2 opacity-80" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs block mb-2">Password</label>
                            <div className="relative flex items-center">
                                <input name="password" type="password" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter Your Password" />
                                <TbPasswordUser className="text-3xl absolute right-2 opacity-80" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                            Don&apos;t have an account?
                            <Link to='/register'
                                className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                            >Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;