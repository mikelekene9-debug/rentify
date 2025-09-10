 "use client"
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

export function Navbar () {
const [Dropdown,setDropDown] = useState(false);
const toggleDropDown = () =>{
    setDropDown(!Dropdown);
}

return (
    <main className="bg-white shadow shadow-gray-300 w-full">
        <div className="flex justify-between h-[50px] pt-3 px-5">
            <p className="text-blue-500 font-bold text-2xl">Rentify</p>
            <ul className="hidden md:flex gap-10 font-semibold cursor-pointer">
                <Link href="/"><li>home</li></Link>
                <Link href="/dashboard/tenant-form"><li>Add-Rent</li></Link>
                <Link href="/dashboard/rent-list"><li>Rent-List</li></Link>
            </ul>
            <div className="flex gap-3">
                <Link href="/auth/login"><p className="w-[60px]">Login</p></Link>
                <Link href="/dashboard/profile"><p><CgProfile /></p></Link>
            </div>
            <div className="block md:hidden">
                <RxHamburgerMenu onClick={toggleDropDown} className="text-blue-500 text-3xl"/>
            </div>    
            
            <div>
                {Dropdown && (
            <div className="px-5 pb-1 md:hidden">   
            <ul>
                <li>home</li>
                <li>Add-Rent</li>
                <li>Rent-List</li>
            </ul>
            </div> )}
            </div>
        </div>

    </main>
);
}

