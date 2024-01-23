import { HiOutlineMail } from "react-icons/hi";
import { IoKeyOutline } from "react-icons/io5";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../../Context/appContext";

const SignIn = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigate = useNavigate()
    const { setUser, user, storeUserInfoInLocalStorage } = useContext(AppContext);

    const handleFormSubmit = (e) => {
        const Form = e.target;
        const email = Form.email.value
        const password = Form.password.value

        const token = localStorage.getItem('accessToken');

        const userInfo = { email, password };


        fetch('http://localhost:5000/signIn', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                
                setUser(data.userData);
                storeUserInfoInLocalStorage(data.userData);

                if (data.status == 200) {
                    navigate(`/${data.userData.role}`)
                    localStorage.setItem('accessToken', data.token)
                }
            })

        e.preventDefault();
        Form.reset()
    }

    return (
        <div className='bg-[#F6F5F7] min-h-screen min-w-full flex items-center justify-center'>
            <div className='bg-[#FFFFFF] max-w-[500px] min-w-[300px] w-full m-2 lg:p-6 p-1 rounded-lg shadow-lg'>
                <h2 className="text-2xl font-bold text-[#E4002B] text-center mb-10">Sign In - House Hunter</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="border border-[#CAC8CC] rounded-lg flex items-center p-1 gap-2 my-2">
                        <HiOutlineMail className="text-2xl ml-1" />
                        <input className="w-full p-1 outline-none border-none" type="email" placeholder="Your Email" name="email" />
                    </div>

                    <div className="border border-[#CAC8CC] rounded-lg flex items-center p-1 gap-2 my-2">
                        <IoKeyOutline className="text-2xl ml-1" />
                        <input className="w-full p-1 outline-none border-none" type={isPasswordVisible ? 'text' : 'password'} placeholder="********" name="password" />
                        <div onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                            {isPasswordVisible ? <FaEyeSlash className="text-2xl mr-1 cursor-pointer" /> : <FaRegEye className="text-2xl mr-1 cursor-pointer" />}
                        </div>
                    </div>

                    <div className="flex justify-between items-center flex-wrap my-2">
                        <span>Don't Have An Account? <Link className="hover:underline hover:text-[#E4002B] cursor-pointer" to={'/signUp'}>SinUp</Link></span>
                        <span className="hover:underline hover:text-[#E4002B] cursor-pointer">Forget Password</span>
                    </div>


                    <button className="w-full my-4 bg-[#E4002B] text-white p-2 rounded-lg" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn