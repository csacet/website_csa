"use client";
import csAssociationLogo from '../app/assets/images/csLogo.svg';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="font-secondary mx-[2rem] flex flex-row bg-navbg text-white text-xl rounded-b-[1.25rem] h-[6.375rem] items-center justify-between px-7">

                {/* Logo */}
                <div className="lg:hidden ">
                    <Image src={csAssociationLogo} alt='associationlogo' className='h-[4.0625rem]' />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex flex-row space-x-[5rem] items-center pl-16">
                    <div>Achievements</div>
                    <div>Events</div>
                    <div>Newsletter</div>
                </div>
                {/* Logo */}
                <div className="hidden lg:flex ml-[2rem]">
                    <Image src={csAssociationLogo} alt='associationlogo' className='h-[4.0625rem]' />
                </div>
                <div className="hidden lg:flex flex-row space-x-[5rem] items-center pr-16">
                    <div>Dotslash</div>
                    <div>CS-Cup</div>
                    <div>Placements</div>
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
                    <div>Achievements</div>
                    <div>Events</div>
                    <div>Newsletter</div>
                    <div>Dotslash</div>
                    <div>CS-Cup</div>
                    <div>Placements</div>
                </div>
            )}
        </div>
    );
}
