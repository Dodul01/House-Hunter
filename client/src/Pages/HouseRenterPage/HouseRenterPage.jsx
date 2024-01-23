import { useContext, useEffect } from "react"
import NavBar from "../../Components/NavBar/NavBar"
import { AppContext } from "../../Context/appContext"

const HouseRenterPage = () => {
  const { user, readUserInfoLocalStorage } = useContext(AppContext);

  useEffect(() => {
    readUserInfoLocalStorage()
  }, [])

  console.log(user);

  return (
    <div>
      <NavBar userName={user?.name} userRole={user?.role} />
    </div>
  )
}

export default HouseRenterPage