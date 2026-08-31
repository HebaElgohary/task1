import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useEffect } from "react";
import { routes } from "../../constants/routes";

export default function MainLayout() {
    const isLoggedIn=useAppSelector((state)=>state.auth.isAuthenticated)
   const navigate=useNavigate()
    useEffect(()=>{
      if(isLoggedIn)
        return
      navigate(routes.LOGIN)
    },[])
  return (
    <div>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}