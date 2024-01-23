import { useContext, useEffect } from "react"
import NavBar from "../../Components/NavBar/NavBar"
import { AppContext } from "../../Context/appContext"
import RoomsContainer from "../../Components/RoomsContainer/RoomsContainer";

const Home = () => {
  const { user, readUserInfoLocalStorage, setRooms, rooms } = useContext(AppContext);

  useEffect(() => {
    fetch('http://localhost:5000/allRooms', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        setRooms(data)
      })

    readUserInfoLocalStorage()
  }, [])

  return (
    <div>
      <NavBar userName={user?.name} userRole={user?.role} />
      <RoomsContainer rooms={rooms}/>
    </div>
  )
}

export default Home