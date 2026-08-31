import React, { useEffect } from "react";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";
import { routes } from "../../constants/routes";
import { NavLink } from "react-router-dom";
import i18n from "../../i18n/config";

import { useAppDispatch } from "../../hooks/usAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { logout } from "../../store/auth.slice";

export default function Navbar() {
  const { t } = useTranslation("translation");
  const dispatch=useAppDispatch()
  const isLoggedIn=useAppSelector((state)=>state.auth.isAuthenticated)
  const list = [
    { id: 0, path: routes.HOME, name: t("header.list.home") },
    { id: 1, path: routes.ABOUT, name: t("header.list.about") },
    { id: 2, path: routes.CONTACT, name: t("header.list.contact") },
  ];



    const changeLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";

    i18n.changeLanguage(newLanguage);
  };

    useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  const handleLogout=()=>{
dispatch(logout())
  }
      return (
    <header className="flex flex-row justify-between !p-5 !px-11 gap-11">
      <h1 className="text-3xl font-semibold">{t("header.logo")}</h1>
      <nav className="flex justify-between gap-11 items-center ">
        <ul className="flex gap-5">
          {list.map((l) => (
            <li key={l.id}>
              <NavLink to={l.path}>{l.name}</NavLink>{" "}
            </li>
          ))}
        </ul>
        <Button
          className="bg-transparent text-text-secondary border font-semibold "
          onClick={changeLanguage}
        >
          {i18n.language === "en" ? "Ar" : "En"}
        </Button>
        <NavLink to={routes.LOGIN}>
          <Button onClick={handleLogout}>{isLoggedIn?t("header.logoutBtn"):'loginBtn'}   </Button>
        </NavLink>
      </nav>
    </header>
  );
}
