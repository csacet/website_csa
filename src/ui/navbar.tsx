import csAssociationLogo from '../app/assets/images/csLogo.svg'
import Image from 'next/image';

export default function Navbar() {
    return (
        <div className="font-primary mx-[2rem] flex flex-row bg-[#1A1A1A] text-white text-xl rounded-b-[1.25rem] h-[6.375rem] items-center justify-between">

            <div className='flex flex-row ml-[7.018125rem] space-x-[5rem]'>
                <div>Achievements</div>
                <div>Events</div>
                <div>Newsletter</div>
            </div>
            <Image src={csAssociationLogo} alt='associationlogo' className='h-[4.0625rem]' />
            <div className='flex flex-row mr-[7.018125rem] space-x-[5rem]'>
                <div>Dotslash</div>
                <div>CS-Cup</div>
                <div>Placements</div>
            </div>
            

        </div>
    )
}