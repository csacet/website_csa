"use client";
import csAssociationLogo from '../app/assets/images/csLogo.svg';
import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isSmallScreen, setIsSmallScreen] = useState(null);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1440);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    if (isSmallScreen === null) {
        return null;
    }

    return (
        <div className="mx-[2rem] flex flex-col md:flex-row bg-[#1A1A1A] text-white text-xl rounded-b-[1.25rem] md:h-[6.375rem] h-fit p-5 items-center">
            {!isSmallScreen && (
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row ml-[7.018125rem] space-x-[5rem]">
                        <Link href="/achievements">
                            <div className="cursor-pointer hover:text-[#FFE53B]">Achievements</div>
                        </Link>
                        <Link href="/events">
                            <div className="cursor-pointer hover:text-[#FFE53B]">Events</div>
                        </Link>
                        <Link href="/newsletter">
                            <div className="cursor-pointer hover:text-[#FFE53B]">Newsletter</div>
                        </Link>
                    </div>
                    <Link href="/">
                        <Image src={csAssociationLogo} alt="associationlogo" className="h-[4.0625rem]" />
                    </Link>
                    <div className="flex flex-row mr-[7.018125rem] space-x-[5rem]">
                        <Link href="/dotslash">
                            <div className="cursor-pointer hover:text-[#FFE53B]">Dotslash</div>
                        </Link>
                        <Link href="/cscup">
                            <div className="cursor-pointer hover:text-[#FFE53B]">CS-Cup</div>
                        </Link>
                        <Link href="/placements">
                            <div className="cursor-pointer hover:text-[#FFE53B]">Placements</div>
                        </Link>
                    </div>
                </div>
            )}

            {isSmallScreen && (
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row">
                        <Link href="/">
                            <Image src={csAssociationLogo} alt="associationlogo" className="h-[3rem]" />
                        </Link>
                        <div className="text-lg text-center my-auto">Cs Association</div>
                    </div>
                    <div onClick={toggleMenu} className="mr-0 h-[2.5rem] w-[2.5rem] flex flex-col justify-center items-center cursor-pointer">
                        <span className={`block w-[1.770625rem] h-[3px] bg-white transition-transform duration-300 ease-in-out ${menuActive ? 'transform translate-y-2 rotate-45 mb-[5px]' : 'mb-1 mt-[0.5rem]'}`}></span>
                        <span className={`block w-[1.770625rem] h-[3px] bg-white transition-opacity duration-300 ease-in-out ${menuActive ? 'opacity-0 mb-[5px]' : 'mb-1'}`}></span>
                        <span className={`block w-[1.770625rem] h-[3px] bg-white transition-transform duration-300 ease-in-out ${menuActive ? 'transform -translate-y-2 -rotate-45' : ''}`}></span>
                    </div>
                </div>
            )}
            
            {isSmallScreen && menuActive && (
                <div className="bg-[#1A1A1A] rounded-[1.25rem] text-white flex flex-col space-y-3 z-50 mt-6">

                    <Link href="/achievements">
                        <div className="hover:underline cursor-pointer">Achievements</div>
                    </Link>
                    <Link href="/events">
                        <div className=" hover:underline cursor-pointer">Events</div>
                    </Link>
                    <Link href="/newsletter">
                        <div className="hover:underline cursor-pointer">Newsletter</div>
                    </Link>
                    <Link href="/dotslash">
                        <div className="hover:underline cursor-pointer">Dotslash</div>
                    </Link>
                    <Link href="/cscup">
                        <div className="hover:underline cursor-pointer">CS-Cup</div>
                    </Link>
                    <Link href="/placements">
                        <div className="hover:underline cursor-pointer">Placements</div>
                    </Link>
                    </div>
            )}
        </div>
    );
}

                