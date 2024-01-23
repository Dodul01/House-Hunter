import NavBar from "../../Components/NavBar/NavBar";
import RoomList from "../../Components/RoomsLIst/RoomList";

const HouseOwnerPage = () => {
  return (
    <div>
      <NavBar userName={'Mozammel Hoque Dodul'} userRole={"houseOwner"} />
      <RoomList />
    </div>
  );
};

export default HouseOwnerPage;
