import { Link } from "react-router-dom";

const Footer = () => {
    return (

        <div className="bg-orange-50  mt-5 p-6 text-black">



            <footer className="footer justify-between px-14   ">
                <nav>
                    <h6 className=" font-bold text-lg text-black">Services</h6>
                    <p className="">    <Link className="link link-hover">About us</Link>
                    </p>
                    <p className="">    <Link className="link link-hover">Contact</Link>
                    </p>
                   
                    
                </nav>
                <nav>
                    <h6 className="text-black  font-bold text-lg">Company</h6>
                    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
  
                    
                </nav>
                <nav>
                    <h6 className="text-black  font-bold text-lg">Legal</h6>
                   
                    <p >Phone: 01780169656</p>
                    <p >email:Onlinegroupstudy@gmail.com</p>
                </nav>
            </footer>
            
                    <aside className="text-center mt-5 ">
    <p>Copyright © 2024 - All right reserved by OGS </p>
  </aside>
             

        </div>
    );
};

export default Footer;


