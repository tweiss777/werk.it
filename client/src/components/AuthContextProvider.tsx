import AuthContext from "../context/AuthContext";
import React, { createContext, useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
// import { getCookie, setCookie } from "react-cookie";
// import { api } from "../utils/utils";
// import { AlertContext } from "./AlertContext";
import { api, TOKEN, ACCESSTOKEN } from "../utils/api";
import { getMaxListeners } from "process";
import { response } from "express";
import { IToken } from "../Interfaces/IToken";

axios.defaults.withCredentials = true;
export const axiosJWT = axios.create({
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.defaults.headers.common = { Authorization: `bearer ${TOKEN}` };

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState<boolean|Object>(false);
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  // const { setError } = useContext(AlertContext);

  axiosJWT.interceptors.request.use(
    async (config) => {
      if (true) {
        //if (expire * 1000 < new Date().getTime())
        // const response = await axios.get(`${api}/token`);
        const response = await axios.get("http://localhost:9000/token");
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setExpire(decoded);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    refreshToken();

    // setExpire("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function register(newUser) {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const res = await axios.post(`${api}/signup`, newUser);
      console.log("result register", res.data);
      const { email, password } = newUser;
      login({ email, password });
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  }

  async function login(credential) {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const res = await axios.post(`${api}/login`, credential);

      setToken(res.data.accessToken);
    } catch (err) {
      setError(err);
    }
    // refreshToken();
    setIsLoading(false);
  }

  async function logout() {
    if (isLoading) return;
    try {
      // setCookie("refreshToken", "");
      // navigateTo("/");
      setUser(false);
      await axios.delete(`${api}/logout`);
    } catch (err) {
      setError(err);
    }
  }
  // async function token() {}

  const refreshToken = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      console.log("trying to get", `${api}/token`);
      const response = await axios.get(`${api}/token`);
      console.log("response", response);
      setToken(response.data.accessToken);
      const decoded: IToken = jwtDecode(response.data.accessToken);

      if (decoded) {
        setUser(decoded.user);
        setExpire(decoded.exp);
        //need to get rid of this error on line 107 + 108
      }
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        setIsLoading,
        user,
        token,
        expire,
        register,
        login,
        logout,
        axiosJWT,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
