import React from "react";
import AuthContext from "../context/AuthContext";

export default function AuthContextProvider({ children }) {

    async function Login() {}
    async function Signup() {}
    async function Logout() {}
    async function Token() {}


  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
