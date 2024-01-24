import { Outlet } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div className='max-w-screen-2xl m-auto'>
      <Outlet />
      <Toaster/>
    </div>
  )
}

export default App
