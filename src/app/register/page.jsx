import Image from "next/image";
import mash from "/public/loginImg/mash.png"
import googleIcon from "/public/loginImg/google.svg"
import Link from "next/link";
import Button from "@/components/Button/Button";
const Register = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-screen-md mx-auto min-h-[380px] bg-white shadow rounded-lg grid sm:grid-cols-2 gap-4 my-10">
                <div className="w-full h-full relative">
                    <Image
                        src={mash}
                        alt="nature img"
                        height={100}
                        width={100}
                        priority
                        className="h-full w-full rounded-lg" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-4">
                        <h3 className="h3 text-center flex flex-col items-center">Create account in <span className="text-green-900">Work Hub!</span></h3>
                        <div className="w-full bg-white/50 backdrop-blur-3xl rounded-lg">
                            <p className="text-xs p-4 text-center">Already have an account? <Link href={"/login"} className="text-green-900">
                                Login Now
                            </Link> </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex flex-col gap-6">
                    <h3 className="h3 text-center text-green-900">Register Now</h3>
                    <form className="flex flex-col gap-4">
                        <label className="grid gap-1">
                            <span>Name:</span>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                required
                                className="w-full px-4 py-2 bg-white border border-neutral-200 focus:border-green-900 focus:outline-none text-neutral-500 rounded-lg" />
                        </label>
                        <label className="grid gap-1">
                            <span>Email:</span>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                required
                                className="w-full px-4 py-2 bg-white border border-neutral-200 focus:border-green-900 focus:outline-none text-neutral-500 rounded-lg" />
                        </label>
                        <label className="grid gap-1">
                            <span>Password:</span>
                            <input
                                type="password"
                                placeholder="Enter Your Password"
                                required
                                className="w-full px-4 py-2 bg-white border border-neutral-200 focus:border-green-900 focus:outline-none text-neutral-500 rounded-lg" />
                        </label>
                        <Button type={"submit"}>Register</Button>
                    </form>
                    <span className="text-center text-sm text-neutral-500 -my-2">- or -</span>
                    <button className="px-4 py-2 rounded-lg text-neutral-900 bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center gap-2 transition font-medium ">
                        <Image
                            src={googleIcon}
                            alt="Google Svg Icon"
                            height={100}
                            width={100}
                            className="h-5 w-5"
                        />
                        <span>Sign in with Google</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Register;