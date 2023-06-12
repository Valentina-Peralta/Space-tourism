import './App.css'
import Destination from './layouts/Destination'
import Home from './layouts/Home'
import RootLayout from './layouts/RootLayout'
import Crew from './layouts/Crew'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Technology from './layouts/Technology'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='destination' element={<Destination />} />
      <Route path='crew' element={<Crew />} />
      <Route path='technology' element={<Technology />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App
