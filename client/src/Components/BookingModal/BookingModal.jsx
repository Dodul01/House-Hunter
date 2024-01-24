import { useContext } from "react"
import { AppContext } from "../../Context/appContext";
import toast, { Toaster } from "react-hot-toast";

const BookingModal = ({ setIsModalOpen, clickedRoom }) => {
    const { user } = useContext(AppContext);

    const handleForm = (e) => {
        const token = localStorage.getItem('accessToken')
        const bookedRoom = {
            address: clickedRoom.address,
            bathRoom: clickedRoom.bathRoom,
            bedRoom: clickedRoom.bedRoom,
            city: clickedRoom.city,
            date: clickedRoom.date,
            description: clickedRoom.description,
            houseOwner: clickedRoom.houseOwner,
            name: clickedRoom.name,
            phone: clickedRoom.phone,
            rentPerMonth: clickedRoom.rentPerMonth,
            roomImage: clickedRoom.roomImage,
            roomSize: clickedRoom.roomSize,
            renterEmail: user.email,
        }

        fetch('https://server-nine-jet-46.vercel.app/bookedRooms', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(bookedRoom)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Room Booked Sucessfully')
                }
            })

        console.log(bookedRoom);
        e.preventDefault();
    }

    return (
        <div className='fixed inset-0 flex items-center justify-center'>
            <div className="absolute bg-gray-800 opacity-50 inset-0"></div>
            <Toaster />
            <div className="z-10 bg-white p-8 rounded-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-2">{clickedRoom.name}</h2>

                <form onSubmit={handleForm}>
                    <div className="mb-1 flex gap-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                                Name
                            </label>
                            <input type="text" name="name" value={user?.name} className="w-full border rounded-md p-2" readOnly />
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                                Email
                            </label>
                            <input type="text" name="email" value={user?.email} className="w-full border rounded-md p-2" readonly />
                        </div>
                    </div>
                    <div className="mb-1">
                        <div>
                            <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                                Phone
                            </label>
                            <input type="text" name="phone" value={user?.phone} className="w-full border rounded-md p-2" readOnly />
                        </div>
                    </div>



                    <div className="flex justify-end mt-10">
                        <button onClick={() => setIsModalOpen(false)} type="button" className="bg-gray-400 text-white py-2 px-4 rounded-md mr-2">Cancel</button>
                        <button type="submit" className="bg-[#E4002B] text-white py-2 px-4 rounded-md">Book Room</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BookingModal