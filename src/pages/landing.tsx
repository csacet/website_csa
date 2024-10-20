import Navbar from '../ui/navbar';
import "../app/globals.css";
import Image from 'next/image';
import sampleDepartmentImage from '../app/assets/images/sampleDepartmentImage.svg';
import landingImg1 from '../app/assets/images/landingImg1.svg';
import landingImg2 from '../app/assets/images/landingImg2.svg';
import Footer from '../ui/Footer';

export default function landing() {
    return (

        <div>
            <Navbar />
            {/* <div className='mx-[2rem] mt-[1.125rem] h-fit w-full relative text-center text-white brightness-50'>
                <Image src={sampleDepartmentImage} alt='CS Department' className=' ' />
                <div className='text-[5rem] absolute m-auto font-secondary items-center left-1/2 top-1/2'>CS ASSOCIATION</div>
                <div className='text-[2rem] absolute m-auto'>Department of Computer Science</div>
                <div className='border-[1px] rounded-[1.25rem] border-white absolute bottom-[2.125rem] left-[2.3125rem]'>
                    <div className='text-[1.5rem] my-[1.25rem] mx-[2.1875rem]'>Contact Us</div>
                </div>
                <div className='text-[1.5rem] absolute bottom-0 right-9 h-[8.5rem]'>College of Engineering Trivandrum</div>
            </div> */}

            <div className='mx-[2.03125rem] mt-[1.875rem] flex flex-row bg-[#F4F4F4] px-[4.875rem] py-[3.3125rem] rounded-[1.25rem] space-x-'>
                <Image src={landingImg1} alt='Department of Computer Science' className=''/>
                <div className='flex flex-col my-auto ml-[6.25rem]'>
                    <div className='font-bold text-5xl'>Department of Computer Science</div>
                    <div className='font-normal text-xl mt-[2.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
            </div>

            <div className='mx-[2.03125rem] mt-[1.875rem] flex flex-row bg-[#F4F4F4] px-[4.875rem] py-[3.3125rem] rounded-[1.25rem] space-x-'>
                
                <div className='flex flex-col my-auto mr-[4.0625rem]'>
                    <div className='font-bold text-5xl'>Department of Computer Science</div>
                    <div className='font-normal text-xl mt-[2.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
                <Image src={landingImg2} alt='Department of Computer Science' className=''/>
            </div>
            <Footer />
        </div>
    )
}