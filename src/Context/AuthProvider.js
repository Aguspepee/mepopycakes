import React, { useState } from "react";
import AuthContext from "./AuthContext";



function AuthProvider(porps) {

    const [userLogin, setUserLogin] = useState(localStorage.getItem("LoginUserMepopycakes"))


    const loginUser = () => {
        localStorage.setItem("LoginUserMepopycakes", true)
        setUserLogin(true)
        console.log("localstate", localStorage.getItem("LoginUserMepopycakes"))
    }
    const logoutUser = () => {
        localStorage.setItem("LoginUserMepopycakes", false)
        setUserLogin(false)

    }



    return (
        <AuthContext.Provider
            value={{
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