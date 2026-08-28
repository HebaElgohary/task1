import React, { useState, type ChangeEvent, type SubmitEvent } from "react";
import Label from "../components/ui/Label";
import { useTranslation } from "react-i18next";
import Title from "../components/ui/Title";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import type { IFormData } from "../types/types";

export default function Login() {
  const { t } = useTranslation("translation");


  const [formData,setFormData]=useState<IFormData>({email:'',password:''})

  const handleSubmit=(e:SubmitEvent<HTMLFormElement>)=>{
      e.preventDefault();

  }

  const changeHandler=(e:ChangeEvent<HTMLInputElement>)=>{

    setFormData({...formData,[e.target.name]:e.target.value} )
    console.log('formData',formData)
  }
  return (
    <section className="min-h-[82vh] flex flex-col gap-11 justify-center items-center bg-background-secondary">
      <form
        action=""
        className="!space-y-5 !py-11 bg-background shadow-lg !px-6 rounded-2xl "
      >
        <Title className="text-center !mb-6">{t("login.title")}</Title>

        {/* -----------email-------------- */}
        <div className="flex gap-5 items-center justify-between">
          <Label className="self-start">{t("login.emailLabel")}</Label>
          <Input type="email" name="email" value={formData.email} onChange={(e)=>changeHandler(e)} />
        </div>
        {/* ------------------------- */}
        {/* -----------password-------------- */}

        <div className="flex gap-5 items-center justify-between">
          <Label>{t("login.passwordLabel")}</Label>
          <Input type="password" name="password" onChange={(e)=>changeHandler(e)} />
        </div>
        {/* ------------------------- */}

        <Button className="self-start" type="submit">
          {t("login.loginBtn")}
        </Button>
      </form>
    </section>
  );
}
