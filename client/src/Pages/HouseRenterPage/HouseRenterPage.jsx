import { useContext, useEffect, useState } from "react"
import NavBar from "../../Components/NavBar/NavBar"
import { AppContext } from "../../Context/appContext"
import { RiDeleteBin2Line } from 'react-icons/ri'
import toast, { Toaster } from "react-hot-toast"

const HouseRenterPage = () => {
  const { user, readUserInfoLocalStorage } = useContext(AppContext);
  const [bookedRooms, setBookedRooms] = useState([]);
  const token = localStorage.getItem('accessToken');

  const handleCancelBooking = (id) => {
    fetch(`https://server-nine-jet-46.vercel.app/cancleBooking/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success('Room Delete Sucessully')
        }
      })
  }

  useEffect(() => {
    fetch('https://server-nine-jet-46.vercel.app/getBookedRooms', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then(data => setBookedRooms(data))

    readUserInfoLocalStorage()
  }, [bookedRooms])

  return (
    <div>
      <NavBar userName={user?.name} userRole={user?.role} />
      <Toaster />
      <div>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border-b p-4">Image</th>
              <th className="border-b p-4">Name</th>
              <th className="border-b p-4">Price</th>
              <th className="border-b p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookedRooms?.map((booking) => (
              <tr key={booking._id} className="hover:bg-gray-100">
                <td className="flex items-center justify-center border-b p-4">
                  <img src={booking.roomImage} alt={booking.name} className="w-16 rounded-full h-16 object-cover" />
                </td>
                <td className="border-b text-center p-4">{booking.name}</td>
                <td className="border-b text-center p-4">${booking.rentPerMonth}</td>
                <td className="border-b text-center p-4">
                  <button
                    onClick={() => handleCancelBooking(booking?._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <RiDeleteBin2Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster />
    </div>
  )
}

export default HouseRenterPage