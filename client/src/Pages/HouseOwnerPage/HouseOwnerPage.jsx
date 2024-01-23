import { useContext } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import RoomList from "../../Components/RoomsLIst/RoomList";
import { AppContext } from "../../Context/appContext";


const HouseOwnerPage = () => {
  const { user } = useContext(AppContext);

  return (
    <div>
      <NavBar userName={user.name} userRole={user.userRole} />
      <h1 className="text-2xl font-semibold m-2">Rooms List</h1>
      <RoomList />
    </div>
  );
};

export default HouseOwnerPage;
