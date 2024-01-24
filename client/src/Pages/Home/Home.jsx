import { useContext, useEffect, useState } from "react"
import NavBar from "../../Components/NavBar/NavBar"
import { AppContext } from "../../Context/appContext"
import RoomsContainer from "../../Components/RoomsContainer/RoomsContainer";
import BookingModal from "../../Components/BookingModal/BookingModal";
import FilterBox from "../../Components/FilterBox/FilterBox";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const { user, readUserInfoLocalStorage } = useContext(AppContext);
  const [rooms, setRooms] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedRoom, setClickedRoom] = useState({});

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
      <FilterBox />
      <RoomsContainer setIsModalOpen={setIsModalOpen} rooms={rooms} setClickedRoom={setClickedRoom} />
      {isModalOpen && <BookingModal clickedRoom={clickedRoom} setIsModalOpen={setIsModalOpen} />}
      <Footer />
    </div>
  )
}

export default Home