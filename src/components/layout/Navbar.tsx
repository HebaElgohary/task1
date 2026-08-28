import React from "react";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";
import { routes } from "../../constants/routes";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const { t } = useTranslation("translation");
  const list = [
    { id: 0, path: routes.HOME, name: t("header.list.home") },
    { id: 1, path: routes.ABOUT, name: t("header.list.about") },
    { id: 2, path: routes.CONTACT, name: t("header.list.contact") },
  ];
  return (
    <header className="flex flex-row justify-between !p-5">
      <h1 className="text-3xl font-semibold">{t('header.logo')}</h1>
      <nav className="flex justify-between gap-11 items-center ">
        <ul className="flex gap-5">
          {list.map((l) => (
            <li key={l.id}>
              <NavLink to={l.path}>{l.name}</NavLink>{" "}
            </li>
          ))}
        </ul>
        <NavLink to={routes.LOGIN}>
          <Button >{t("header.loginBtn")}</Button>
        </NavLink>
      </nav>
    </header>
  );
}
