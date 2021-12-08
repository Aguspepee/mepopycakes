import React, { useState } from "react";
import AuthContext from "./AuthContext";



function AuthProvider(porps) {
    
   const [userLogin, setUserLogin] = useState(localStorage.getItem("LoginUserMepopycakes"))
   const [userInfo, setUserInfo] = useState(localStorage.getItem("UserNameMepopycakes"))
  
    const loginUser = () => {
        localStorage.setItem("LoginUserMepopycakes",true)
        setUserLogin(true)
        console.log("localstate",localStorage.getItem("LoginUserMepopycakes"))
    }
    const logoutUser = () => {
        localStorage.setItem("LoginUserMepopycakes",false)
        setUserLogin(false)
        
    }
    const loadUserInfo = (props) => {
        const usuario = props;
        console.log("usuario", usuario)
        localStorage.setItem("UserNameMepopycakes",usuario)
        const usuariosprueba = localStorage.getItem("UserNameMepopycakes")
        console.log("locals",usuariosprueba)
        
        
    }


    return (
        <AuthContext.Provider
            value={{
                userInfo,
                loadUserInfo, 
                userLogin,
                loginUser,
                logoutUser
            }}
        >
            {porps.children}
        </AuthContext.Provider>
    )
}
export default AuthProvider