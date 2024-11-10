"use client";
import csAssociationLogo from '../app/assets/images/csLogo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div className=" flex flex-col lg:flex-row bg-[#1A1A1A] text-white text-lg  lg:h-[6.375rem] h-fit p-5 font-primary items-center">
            {/* Large screen nav items */}
            <div className="hidden lg:flex flex-row justify-between w-full">
                <div className="flex flex-row ml-[7.018125rem] space-x-[5rem] items-center">
                    <Link href="/achievements"><div className="cursor-pointer hover:text-[#FFE53B]">Achievements</div></Link>
                    <Link href="/events"><div className="cursor-pointer hover:text-[#FFE53B]">Events</div></Link>
                    <Link href="/newsletter"><div className="cursor-pointer hover:text-[#FFE53B]">Newsletter</div></Link>
                </div>
                <Link href="/"><Image src={csAssociationLogo} alt="associationlogo" className="h-[3rem]" /></Link>
                <div className="flex flex-row mr-[7.018125rem] space-x-[5rem] items-center">
                    <Link href="/dotslash"><div className="cursor-pointer hover:text-[#FFE53B]">Dotslash</div></Link>
                    <Link href="/cscup"><div className="cursor-pointer hover:text-[#FFE53B]">CS-Cup</div></Link>
                    <Link href="/placements"><div className="cursor-pointer hover:text-[#FFE53B]">Placements</div></Link>
                </div>
            </div>

            {/* Mobile screen menu toggle */}
            <div className="lg:hidden flex flex-row justify-between w-full">
                <Link href="/"><Image src={csAssociationLogo} alt="associationlogo" className="h-[3rem]" /></Link>
                <div onClick={toggleMenu} className="h-[2.5rem] w-[2.5rem] flex flex-col justify-center items-center cursor-pointer">
                    <span className={`block w-[1.770625rem] h-[3px] bg-white transition-transform duration-300 ease-in-out ${menuActive ? 'transform translate-y-2 rotate-45' : ''}`}></span>
                    <span className={`block w-[1.770625rem] h-[3px] bg-white transition-opacity duration-300 ease-in-out ${menuActive ? 'opacity-0' : 'my-[4px]'}`}></span>
                    <span className={`block w-[1.770625rem] h-[3px] bg-white transition-transform duration-300 ease-in-out ${menuActive ? 'transform -translate-y-2 -rotate-45' : ''}`}></span>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {menuActive && (
                <div className="fixed top-[6rem] left-0 w-full bg-[#1A1A1A] text-white rounded-b-[1.25rem] flex flex-col items-start space-y-4 z-50 px-5 py-6 max-h-[50vh] overflow-y-auto transition-transform duration-300 ease-in-out">
                    <Link href="/achievements"><div className="hover:underline cursor-pointer">Achievements</div></Link>
                    <Link href="/events"><div className="hover:underline cursor-pointer">Events</div></Link>
                    <Link href="/newsletter"><div className="hover:underline cursor-pointer">Newsletter</div></Link>
                    <Link href="/dotslash"><div className="hover:underline cursor-pointer">Dotslash</div></Link>
                    <Link href="/cscup"><div className="hover:underline cursor-pointer">CS-Cup</div></Link>
                    <Link href="/placements"><div className="hover:underline cursor-pointer">Placements</div></Link>
                </div>
            )}
        </div>
    );
}
