import { Route, Routes } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"


function App() {

  return (
    <>
   <Routes>
  <Route element={<MainLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Route>
</Routes>
  
    </>
  )
}

export default App
