import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import HouseModal from '../HouseModal/HouseModal';
import toast from 'react-hot-toast';


const NavBar = ({ userName, userRole }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.clear();
        toast.success('Sign Out Sucessfully')
        navigate('/');
    }


    return (
        <nav>
            {/* House Owner Navbar */}
            {userRole === 'houseOwner' &&

                <div className=' p-2 mb-4 flex items-center justify-between'>
                    <div>
                        <h1 className='text-3xl font-bold text-[#E4002B]'>House Hunter</h1>
                    </div>
                    <div className='flex items-center justify-between gap-10'>
                        <div className='flex items-center justify-between gap-4'>
                            <Link className='font-semibold hover:text-[#E4002B]' to='/'>Home</Link>
                            <Link className='font-semibold hover:text-[#E4002B]' to='/houseOwner'>Dashbord</Link>
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
                                    <button onClick={handleSignOut} className='text-lg bg-[#E4002B] text-white font-semibold p-2 rounded-lg'>Sign Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {isModalOpen ?
                <HouseModal setIsModalOpen={setIsModalOpen} /> :
                ''
            }

            {/* House Renter Navbar */}
            {userRole === 'houseRenter' &&
                <div className='p-2 mb-4 flex items-center justify-between'>
                    <div>
                        <h1 className='text-3xl font-bold text-[#E4002B]'>House Hunter</h1>
                    </div>
                    <div className='flex items-center gap-4 relative select-none'>
                        <Link className='font-semibold hover:text-[#E4002B]' to='/'>Home</Link>
                        <Link className='font-semibold hover:text-[#E4002B]' to='/houseRenter'>Dashbord</Link>
                        <h4 className='font-bold'>{userName}</h4>
                        <button onClick={handleSignOut} className='text-lg bg-[#E4002B] text-white font-semibold p-2 rounded-lg'>Sign Out</button>
                    </div>
                </div>
            }

            {userRole === undefined &&
                <div className='p-2 mb-4 flex items-center justify-between'>
                    <div>
                        <h1 className='text-3xl font-bold text-[#E4002B]'>House Hunter</h1>
                    </div>
                    <Link to={'/signUp'} className='text-lg bg-[#E4002B] text-white font-semibold p-2 rounded-lg'>Sin Up</Link>
                </div>
            }
        </nav>
    );
};

export default NavBar