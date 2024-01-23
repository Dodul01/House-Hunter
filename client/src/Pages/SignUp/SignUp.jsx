import { SiNamecheap } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { TiGroup } from "react-icons/ti";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    
    const handleFormSubmit = (e) => {
        const Form = e.target;
        const fullName = Form.fullName.value 
        const userRole = Form.userRole.value
        const phoneNumber = Form.phoneNumber.value
        const email = Form.email.value
        const password = Form.password.value
        const userInfo = {fullName, userRole, phoneNumber, email, password};
        
        fetch('http://localhost:5000/signUp', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('accessToken', data.token)
        })

        e.preventDefault();
        Form.reset()
    }

    return (
        <div className='bg-[#F6F5F7] min-h-screen min-w-full flex items-center justify-center'>
            <div className='bg-[#FFFFFF] max-w-[500px] min-w-[300px] w-full m-2 lg:p-4 md:p-2 p-1 rounded-lg shadow-lg'>
                <h2 className="text-2xl font-bold text-[#E4002B] text-center mb-10">Sign Up - House Hunter</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="border border-[#CAC8CC] rounded-lg flex items-center p-1 gap-2 my-2">
                        <SiNamecheap className="text-2xl ml-1" />
                        <input className="w-full p-1 outline-none border-none" type="text" placeholder="Full Name" name="fullName" />
                    </div>

                    <div className="border border-[#CAC8CC] rounded-lg flex items-center p-1 gap-2 my-2">
                        <TiGroup className="text-2xl ml-1" />
                        <select className="w-full p-1 outline-none border-none" name="userRole">
                            <option value="null">Select Role</option>
                            <option value="houseOwner">House Owner</option>
                            <option value="houseRenter">House Renter</option>
                        </select>
                    </div>

                    <div className="border border-[#CAC8CC] rounded-lg flex items-center p-1 gap-2 my-2">
                        <FaPhoneAlt className="text-2xl ml-1" />
                        <input className="w-full p-1 outline-none border-none" type="text" placeholder="Phone Number" name="phoneNumber" />
                    </div>

                    <div className="border border-[#CAC8CC] rounded-lg flex items-center p-1 gap-2 my-2">
                        <HiOutlineMail className="text-2xl ml-1" />
                        <input className="w-full p-1 outline-none border-none" type="email" placeholder="Your Email" name="email" />
                    </div>

                    <div className="border border-[#CAC8CC] rounded-lg flex items-center p-1 gap-2 my-2">
                        <IoKeyOutline className="text-2xl ml-1" />
                        <input className="w-full p-1 outline-none border-none" type={isPasswordVisible ? 'text' : 'password'} placeholder="********" name="password" />
                        <div onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                            {isPasswordVisible ?  <FaEyeSlash className="text-2xl mr-1 cursor-pointer" /> : <FaRegEye className="text-2xl mr-1 cursor-pointer" />}
                        </div>
                    </div>

                    <div className="flex justify-between items-center flex-wrap my-2">
                        <span>Already Have An Account? <Link className="hover:underline hover:text-[#E4002B] cursor-pointer" to={'/signIn'}>SinIn</Link></span>
                        <span className="hover:underline hover:text-[#E4002B] cursor-pointer">Forget Password</span>
                    </div>


                    <button className="w-full my-4 bg-[#E4002B] text-white p-2 rounded-lg" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp