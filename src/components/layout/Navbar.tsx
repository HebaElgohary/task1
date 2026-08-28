import React from 'react'
import Button from '../ui/Button'
import { useTranslation } from 'react-i18next'
import { Routes } from '../../constants/routes'

export default function Navbar() {
  
    const {t}=useTranslation('header')
      const list=[
        {id:0,path:Routes.HOME,name:t('list.home')},
        {id:0,path:Routes.ABOUT,name:t('list.about')},
        {id:0,path:Routes.CONTACT,name:t('list.contact')},


    ]
  return (
    <header>
        <h1>Logo</h1>
        <nav>
            <ul>
                {
                    list.map((l)=>
                        <li key={l.id}  >{l.name}</li>
                    )
                }
            </ul>
            <Button>{t('loginBtn')}</Button>
        </nav>
    
    </header>
  )
}
