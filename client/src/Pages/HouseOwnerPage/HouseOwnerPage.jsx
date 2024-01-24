import { useContext, useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import RoomList from "../../Components/RoomsLIst/RoomList";
import { AppContext } from "../../Context/appContext";
import { Toaster } from "react-hot-toast";


const HouseOwnerPage = () => {
  const { user, readUserInfoLocalStorage } = useContext(AppContext);


  useEffect(() => {
    readUserInfoLocalStorage()
  }, [])

  return (
    <div>
      <NavBar userName={user?.name} userRole={user?.role} />
      <h1 className="text-2xl font-semibold m-2">Rooms List</h1>
      <RoomList />
      <Toaster />
    </div>
  );
};

export default HouseOwnerPage;
