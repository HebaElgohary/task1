import React, { useEffect, useState, type ChangeEvent, type SubmitEvent } from "react";
import Label from "../components/ui/Label";
import { useTranslation } from "react-i18next";
import Title from "../components/ui/Title";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import type { IFormData } from "../types/types";
import { validateLogin } from "../schemas/auth.schema";
import { useAppSelector } from "../hooks/useAppSelector";
import type { RootState } from "../store/auth.store";
import { useAppDispatch } from "../hooks/usAppDispatch";
import { login } from "../store/auth.slice";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants/routes";

export default function Login() {
  const { t } = useTranslation("translation");
  const navigate = useNavigate();
       type errorstype= Partial<IFormData>

  const [formData,setFormData]=useState<IFormData>({email:'',password:''})
  const [errors,setErrors]=useState<errorstype>()
    const user=  useAppSelector((state:RootState)=>state.auth.user)
    // const isLogged=  useAppSelector((state:RootState)=>state.auth.isAuthenticated)
    const dispatch=useAppDispatch()
  const handleSubmit=(e:SubmitEvent<HTMLFormElement>)=>{
      e.preventDefault();
  const newErrors = validateLogin(formData);
  setErrors(newErrors)
   if (Object.keys(newErrors).length > 0) {
    return;
 
  }
  else{
    dispatch(login({...formData,id:globalThis.crypto.randomUUID()}))
    navigate(routes.HOME);
    
  }


  }
  //persist Redux state
  useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(user))
  },[user])

  const changeHandler=(e:ChangeEvent<HTMLInputElement>)=>{

    setFormData({...formData,[e.target.name]:e.target.value} )
    console.log('formData',formData)
  }
  return (
    <section className="min-h-[82vh] flex flex-col gap-11 justify-center items-center bg-background-secondary">
      <form
      onSubmit={(e)=>handleSubmit(e)}
        className="!space-y-1 !py-11 bg-background shadow-lg !px-6 rounded-2xl "
      >
        <Title className="text-center !mb-6">{t("login.title")}</Title>

        {/* -----------email-------------- */}
        <div className="flex gap-5 !mt-6 items-center justify-between">
          <Label className="self-start">{t("login.emailLabel")}</Label>
          <Input type="email" name="email" value={formData.email} onChange={(e)=>changeHandler(e)} />
        </div>
          <p className="text-red-800 flex justify-end">{errors?.email}</p>

        {/* ------------------------- */}
        {/* -----------password-------------- */}

        <div className="flex gap-5 !mt-6 items-center justify-between">
          <Label>{t("login.passwordLabel")}</Label>
          <Input type="password" name="password" value={formData.password} onChange={(e)=>changeHandler(e)} />
        </div>
          <p className="text-red-800 flex justify-end ">{errors?.password}</p>

        {/* ------------------------- */}

        <Button className="self-start" type="submit"  >
          {t("login.loginBtn")} 
        </Button>
      </form>
    </section>
  );
}
