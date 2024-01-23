import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import HouseModal from '../HouseModal/HouseModal';

const NavBar = ({ userName, userRole, onSignOut, onAddNewHouse }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <nav>
            {/* House Owner Navbar */}
            <div className=' p-2 mb-10 flex items-center justify-between'>
                <div>
                    <h1 className='text-3xl font-bold text-[#E4002B]'>House Hunter</h1>
                </div>
                <div className='flex items-center justify-between gap-10'>
                    <div>
                        <button onClick={() => setIsModalOpen(true)} className='text-lg bg-[#E4002B] text-white font-semibold p-2 rounded-lg'>Add House</button>
                    </div>
                    <div className='flex items-center gap-4 relative select-none'>
                        <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-lg p-1'>
                            <IoIosArrowDown />
                            <h4 className='font-bold'>{userName}</h4>
                        </div>
                        <div className={`${isDropdownOpen ? 'block' : 'hidden'} absolute top-20 min-w-52 right-2 bg-white shadow rounded-lg border z-50`}>
                            <div className='flex flex-col p-4 rounded-lg gap-2'>
                                <Link className='text-lg'>Profile</Link>
                                <button className='text-lg bg-[#E4002B] text-white font-semibold p-2 rounded-lg'>Sign Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen ?
                <HouseModal setIsModalOpen={setIsModalOpen}/> :
                ''
            }

            {/* House Renter Navbar */}

        </nav>
    );
};

export default NavBar