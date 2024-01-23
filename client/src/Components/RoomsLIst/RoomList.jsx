import { FaEdit, FaTrash } from 'react-icons/fa';

const RoomList = () => {
    return (
        <div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
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
                    <tr className="bg-white border-b hover:bg-gray-100">
                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                            <img className="h-[50px] w-[50px] rounded-full" src="https://www.interiorzine.com/wp-content/uploads/2016/05/vacation-house-17.jpg" alt="" />
                        </th>
                        <td className="px-6 py-4">123 Main St</td>
                        <td className="px-6 py-4">City Name</td>
                        <td className="px-6 py-4">3</td>
                        <td className="px-6 py-4">2</td>
                        <td className="px-6 py-4">250 sq.ft</td>
                        <td className="px-6 py-4">2024-01-31</td>
                        <td className="px-6 py-4">$1200</td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> <span>Online</span>
                            </div>
                        </td>
                        <td className="px-6 py-4 space-x-2">
                            <button className="text-blue-600 hover:underline" title="Edit">
                                <FaEdit />
                            </button>
                            <button className="text-red-600 hover:underline" title="Delete">
                                <FaTrash />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RoomList