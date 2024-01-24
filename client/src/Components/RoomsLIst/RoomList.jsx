import { useContext, useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { AppContext } from '../../Context/appContext';

const RoomList = () => {
    const { user, setRooms, rooms } = useContext(AppContext);

    const token = localStorage.getItem('accessToken');

    const handleDelete = (id) => {
        fetch(`https://server-nine-jet-46.vercel.app/rooms/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
               
            }
        })
    }


    useEffect(() => {
        fetch(`https://server-nine-jet-46.vercel.app/rooms?email=${user.email}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setRooms(data)
            })
    }, [user, rooms])

    return (
        <div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            City
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Bedrooms
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Bathrooms
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Room Size
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Availability Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Rent Per Month
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rooms?.map((room) => {
                        return <tr key={room?._id} className="bg-white border-b hover:bg-gray-100">
                            <td scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                                <img className="h-[50px] w-[50px] rounded-full" src={room?.roomImage} alt="" />
                            </td>
                            <td className="px-6 py-4 text-center">{room?.address}</td>
                            <td className="px-6 py-4 text-center">{room?.city}</td>
                            <td className="px-6 py-4 text-center">{room?.bedRoom}</td>
                            <td className="px-6 py-4 text-center">{room?.bathRoom}</td>
                            <td className="px-6 py-4 text-center">{room?.roomSize}</td>
                            <td className="px-6 py-4 text-center">{room?.date}</td>
                            <td className="px-6 py-4 text-center">${room?.rentPerMonth}</td>
                            <td className="px-6 py-4 text-center">
                                <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> <span>Available</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 space-x-2 text-center">
                                <button className="text-blue-600 hover:underline" title="Edit">
                                    <FaEdit />
                                </button>
                                <button onClick={()=> handleDelete(room?._id)} className="text-red-600 hover:underline" title="Delete">
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default RoomList