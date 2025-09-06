import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-black grid grid-cols-1 md:px-8 md:grid-cols-2 lg:grid-cols-3 lg:py-4 lg:px-5">
            <div>
                <p className="text-2xl text-blue-500 font-bold">Rentify</p>
                <p>Rental management</p>
            </div>
            <div>
                <p className="text-md text-gray-700">Head Office</p>
                <p className="text-md text-gray-700">Umaru Musa way, Asokoro</p>
            </div>
            <div>
                <ul>
                    <li><FaFacebook className="text-3xl text-blue-500"/></li>
                    <li><FaLinkedinIn className="text-3xl text-blue-500"/></li>
                    <li><FaGithub className="text-3xl text-blue-500"/></li>

                </ul>
            </div>

        </footer>
    )
}