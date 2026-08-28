import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { routes } from "./constants/routes"
import Login from "./pages/Login"

function App() {

  return (
    <>
        <BrowserRouter>

   <Routes>
  <Route element={<MainLayout />}>
    <Route path={routes.HOME} element={<Home />} />
    <Route path={routes.ABOUT} element={<About />} />
    <Route path={routes.CONTACT} element={<Contact />} />
    <Route path={routes.LOGIN} element={<Login />} />

  </Route>
</Routes>
        </BrowserRouter>

  
    </>
  )
}

export default App
