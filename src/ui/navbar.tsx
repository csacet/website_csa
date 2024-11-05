"use client";
import csAssociationLogo from '../app/assets/images/csLogo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="font-secondary mx-[2rem] flex flex-row bg-navbg text-white text-xl rounded-b-[1.25rem] h-[6.375rem] items-center justify-between px-7">
                {/* Logo */}
                <div className="lg:hidden ">
                    <Link href="/">
                        <Image src={csAssociationLogo} alt="associationlogo" className="h-[4.0625rem] cursor-pointer" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex flex-row space-x-[5rem] items-center pl-16">
                    <Link href="/achievements">
                        <div className="cursor-pointer">Achievements</div>
                    </Link>
                    <Link href="/events">
                        <div className="cursor-pointer">Events</div>
                    </Link>
                    <Link href="/newsletter">
                        <div className="cursor-pointer">Newsletter</div>
                    </Link>
                </div>

                {/* Logo for desktop */}
                <div className="hidden lg:flex ml-[2rem]">
                    <Link href="/">
                        <Image src={csAssociationLogo} alt="associationlogo" className="h-[4.0625rem] cursor-pointer" />
                    </Link>
                </div>

                <div className="hidden lg:flex flex-row space-x-[5rem] items-center pr-16">
                    <Link href="/dotslash">
                        <div className="cursor-pointer">Dotslash</div>
                    </Link>
                    <Link href="/cscup">
                        <div className="cursor-pointer">CS-Cup</div>
                    </Link>
                    <Link href="/placements">
                        <div className="cursor-pointer">Placements</div>
                    </Link>
                </div>

                {/* Hamburger Icon */}
                <div className="lg:hidden mr-[2rem]" onClick={() => setIsOpen(!isOpen)}>
                    <button className="focus:outline-none">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-navbg text-white text-xl p-4 space-y-4 rounded-lg mx-10">
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
