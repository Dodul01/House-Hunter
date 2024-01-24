import { useContext, useEffect, useState } from "react"
import NavBar from "../../Components/NavBar/NavBar"
import { AppContext } from "../../Context/appContext"

const HouseRenterPage = () => {
  const { user, readUserInfoLocalStorage } = useContext(AppContext);
  const [bookedRooms, setBookedRooms] = useState([]);
  const token = localStorage.getItem('accessToken');

  useEffect(() => {

    fetch('http://localhost:5000/getBookedRooms', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then(data => console.log(data))

    readUserInfoLocalStorage()
  }, [])

  console.log(user);

  return (
    <div>
      <NavBar userName={user?.name} userRole={user?.role} />
      <div>
        {bookedRooms.map((room) => {
          
        })}
      </div>
    </div>
  )
}

export default HouseRenterPage