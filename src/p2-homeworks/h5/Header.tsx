import React from 'react'
import {PATH} from "./AppRoutes";
import s from "./Header.module.css";
import {NavLink} from 'react-router-dom';


function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => isActive ? s.active : s.link}>PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR} className={({isActive}) => isActive ? s.active : s.link}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => isActive ? s.active : s.link}>JuniorPlus</NavLink>
            <div className={s.block}/>
        </div>
    )
}

export default Header
