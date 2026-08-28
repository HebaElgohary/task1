import React from "react";
import Label from "../components/ui/Label";
import { useTranslation } from "react-i18next";
import Title from "../components/ui/Title";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function Login() {
  const { t } = useTranslation("translation");
  return (
    <section className="min-h-[82vh] flex flex-col gap-11 justify-center items-center bg-background-secondary">
      <form action="" className="!space-y-5 !py-11 bg-background shadow-lg !px-6 rounded-2xl ">
        <Title className="text-center !mb-6">{t("login.title")}</Title>

        <div className="flex gap-5 items-center justify-between">
          <Label className="self-start">{t("login.emailLabel")}</Label>
          <Input type="email" />
        </div>
        <div className="flex gap-5 items-center justify-between">
          <Label>{t("login.passwordLabel")}</Label>
          <Input type="password" />
        </div>
        <Button className="self-start">{t('login.loginBtn')}</Button>
      </form>
    </section>
  );
}
