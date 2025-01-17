import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';

import { ShopContext } from '../../context/ShopContext';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] =useState("home");
  const {getTotalCartAmount,token,setToken} = useContext(ShopContext)
  const navigate = useNavigate()
  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")


  }
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu === "home"?"active":""}>home</Link>
            <a href='#explore-category' onClick={()=>setMenu("men")} className={menu === "men"?"active":""}>men</a>
            <a href='#explore-category' onClick={()=>setMenu("women")} className={menu === "women"?"active":""}>women</a>
            <a href='#explore-category' onClick={()=>setMenu("kid")} className={menu === "kid"?"active":""}>kid</a>
            <Link to="https://ecommerce-app-admin.onrender.com">Admin</Link>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
              <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
                <div className={getTotalCartAmount()===0?"":"dot"}></div>

            </div>
            {!token ? <button onClick={()=>setShowLogin(true)}>Sign in</button>
             : <div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className="nav-profile-dropdown">
                <li onClick={()=>{navigate('/myorders')}}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>

              </div>}
            
        </div>
      
    </div>
  )
}

export default Navbar
