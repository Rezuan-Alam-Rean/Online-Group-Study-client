import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Footer = () => {
    return (
        <footer className="w-full  text-white mt-5">
            <div className="container bg-base-200 mx-auto py-6 px-4">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-20 w-20" />

                        <span className="ml-2 text-black text-lg font-semibold">Online group study</span>

                    </div>
                    <div className="text-black text-sm">

                        <span className="footer-title">Services</span>
                        <p className="mb-1">    <Link className="link link-hover">About us</Link>
                        </p>
                        <p className="mb-1">    <Link className="link link-hover">Contact</Link>
                        </p>
                        <p>    <Link className="link link-hover">study</Link>
                        </p>
                    </div>
                    <div className="text-black text-sm">
                        <span className="footer-title">Contact Info</span>
                        <p className="mb-1 lg:mt-4">Phone: 01780169656</p>
                        <p >email:Onlinegroupstudy@gmail.com</p>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="text-center py-3 text-black bg-base-300 text-sm">
                    <p>&copy; {new Date().getFullYear()}  Online group study. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


