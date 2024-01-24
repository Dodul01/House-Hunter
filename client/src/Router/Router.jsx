import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home/Home'
import SignUp from '../Pages/SignUp/SignUp'
import SignIn from '../Pages/SignIn/SignIn'
import HouseOwnerPage from '../Pages/HouseOwnerPage/HouseOwnerPage'
import HouseRenterPage from '../Pages/HouseRenterPage/HouseRenterPage'
import PrivateRouter from './PrivateRouter'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/houseOwner',
                element: <PrivateRouter><HouseOwnerPage /></PrivateRouter>
            },
            {
                path: '/houseRenter',
                element: <PrivateRouter><HouseRenterPage /></PrivateRouter>
            }
        ]
    },
    {
        path: '/signUp',
        element: <SignUp />
    },
    {
        path: '/signIn',
        element: <SignIn />
    }
])

export default router;