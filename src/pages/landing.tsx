import "../app/globals.css";
import Image from 'next/image';
import landingImg1 from '../app/assets/images/landingImg1.svg';
import landingImg2 from '../app/assets/images/landingImg2.svg';

export default function Landing() {
    return (
        <div className="font-primary">
            {/* Full-width image with centered text overlay */}
            <div className="my-3 relative w-3/4 mx-auto"> {/* Added mx-auto to center */}
                <Image src={landingImg2} alt="Dept" className="w-full" />
                <div className="absolute flex-col inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                    <div className="text-white text-5xl font-secondary uppercase">CS Association</div>
                    <div className="text-white text-xl font-secondary">Department of Computer Science</div>
                </div>
            </div>

            {/* Section 1 */}
            <div className="mx-4 lg:mx-[2.03125rem] mt-[1.875rem] flex flex-col lg:flex-row bg-[#F4F4F4] px-6 lg:px-[4.875rem] py-8 lg:py-[3.3125rem] rounded-[1.25rem] space-y-8 lg:space-y-0 lg:space-x-8">
                <Image src={landingImg1} alt="Department of Computer Science" className="w-full lg:w-auto" />
                <div className="flex flex-col my-auto ml-0 lg:ml-[6.25rem] text-center lg:text-left">
                    <div className="font-bold text-3xl lg:text-5xl">Department of Computer Science</div>
                    <div className="font-normal text-base lg:text-xl mt-4 lg:mt-[2.5rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className="mx-4 lg:mx-[2.03125rem] mt-[1.875rem] flex flex-col lg:flex-row bg-[#F4F4F4] px-6 lg:px-[4.875rem] py-8 lg:py-[3.3125rem] rounded-[1.25rem] space-y-8 lg:space-y-0 lg:space-x-8">
                <div className="flex flex-col my-auto mr-0 lg:mr-[4.0625rem] text-center lg:text-left">
                    <div className="font-bold text-3xl lg:text-5xl">Department of Computer Science</div>
                    <div className="font-normal text-base lg:text-xl mt-4 lg:mt-[2.5rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
                <Image src={landingImg2} alt="Department of Computer Science" className="w-full lg:w-auto" />
            </div>
        </div>
    );
}
