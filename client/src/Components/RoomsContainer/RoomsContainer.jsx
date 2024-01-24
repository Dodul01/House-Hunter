import { useContext } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { AppContext } from "../../Context/appContext";
import toast, { Toaster } from "react-hot-toast";

const RoomsContainer = ({ rooms, setIsModalOpen, setClickedRoom }) => {
    const { user } = useContext(AppContext);

    const handleBooking = (room) => {
        if (user?.role === 'houseOwner') {
            return toast.error('You can not book any room.')
        }

        if(!user?.role){
            return toast.error('Please login to book rooms.')
        }

        setClickedRoom(room);
        setIsModalOpen(true);
    }

    return (
        <div className="m-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            <Toaster />
            {rooms?.map((room) => {
                return <div key={room?.room_id} className="border border-gray-300 rounded-xl shadow-md p-2">
                    <img className="w-full bg-center object-cover rounded-xl" src={room?.roomImage} alt="room_Image" />
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">{room?.name}</h2>
                        <p className="text-lg font-semibold">${room?.rentPerMonth}/month</p>
                        <div className="flex items-center text-gray-500">
                            <IoLocationSharp />
                            <p>{room?.address}</p>
                        </div>
                        <p className="text-gray-500">{room?.city}</p>
                        <button onClick={() => handleBooking(room)} className="bg-[#E4002B] text-white w-full font-semibold p-2 rounded-lg mt-4" type="submit">Rent Now</button>
                    </div>
                </div>
            })}
        </div>
    )
}

export default RoomsContainer