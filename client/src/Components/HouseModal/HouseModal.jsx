import { useContext } from "react";
import { AppContext } from "../../Context/appContext";

const HouseModal = ({ setIsModalOpen }) => {
    const { user } = useContext(AppContext)

    const handleForm = (e) => {
        const Form = e.target;
        const name = Form.name.value;
        const address = Form.address.value;
        const city = Form.city.value;
        const bedRoom = Form.bedRoom.value;
        const bathRoom = Form.bathRoom.value;
        const roomImage = Form.roomImage.value;
        const roomSize = Form.roomSize.value;
        const date = Form.date.value;
        const rentPerMonth = Form.rentPerMonth.value;
        const phone = Form.phone.value;
        const description = Form.description.value;
        const room = { name, address, city, bedRoom, bathRoom, roomImage, roomSize, date, rentPerMonth, phone, description, houseOwner: user?.email };

        const token = localStorage.getItem('accessToken');

        fetch('https://server-nine-jet-46.vercel.app/rooms', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(room)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        Form.reset()
        e.preventDefault();
    }

    return (
        <div className='fixed inset-0 flex items-center justify-center'>
            <div className="absolute bg-gray-800 opacity-50 inset-0"></div>

            <div className="z-10 bg-white p-8 rounded-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-2">Add New House</h2>

                <form onSubmit={handleForm}>
                    <div className="mb-1 flex gap-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                                House Name
                            </label>
                            <input type="text" name="name" className="w-full border rounded-md p-2" required />
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                                Address
                            </label>
                            <input type="text" name="address" className="w-full border rounded-md p-2" required />
                        </div>
                    </div>

                    <div className="mb-1 flex gap-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                                City
                            </label>
                            <input type="text" name="city" className="w-full border rounded-md p-2" required />
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                                Bed Room
                            </label>
                            <input type="number" name="bedRoom" className="w-full border rounded-md p-2" required />
                        </div>
                    </div>
                    <div className="mb-1 flex gap-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                                Bath Room
                            </label>
                            <input type="number" name="bathRoom" className="w-full border rounded-md p-2" required />
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                                Room Image URL
                            </label>
                            <input type="text" name="roomImage" className="w-full border rounded-md p-2" required />
                        </div>
                    </div>
                    <div className="mb-1 flex gap-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                                Room's Size
                            </label>
                            <input type="text" name="roomSize" className="w-full border rounded-md p-2" required />
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                                Available Date
                            </label>
                            <input type="date" name="date" className="w-full border rounded-md p-2" required />
                        </div>
                    </div>
                    <div className="mb-1 flex gap-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                                Rent Per Month
                            </label>
                            <input type="number" name="rentPerMonth" className="w-full border rounded-md p-2" required />
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                                Phone Number
                            </label>
                            <input type="text" name="phone" className="w-full border rounded-md p-2" required />
                        </div>
                    </div>
                    <div className="mb-1">
                        <div>
                            <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                                Description
                            </label>
                            <input type="text" name="description" className="w-full border rounded-md p-2" required />
                        </div>
                    </div>



                    <div className="flex justify-end">
                        <button onClick={() => setIsModalOpen(false)} type="button" className="bg-gray-400 text-white py-2 px-4 rounded-md mr-2">Cancel</button>
                        <button type="submit" className="bg-[#E4002B] text-white py-2 px-4 rounded-md">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HouseModal;
