import React from 'react';
import { createContext, useEffect, useState } from 'react';

import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { getCookie, setCookie } from 'react-use-cookie';
import useStickyState from '../../hooks/useStickyState';

export const api = 'http://localhost:5000';

axios.defaults.withCredentials = true;

export const axiosJWT = axios.create({
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  // Props
  const { children } = props;

  // State
  const [user, setUser] = useStickyState(false, 'user', true);
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [loading, setLoading] = useState(false);

  const setError = (error) => console.log(error);

  axiosJWT.interceptors.request.use(
    async (config) => {
      if (expire * 1000 < new Date().getTime()) {
        config.headers.Authorization = `Bearer ${token}`;
        setToken(token);
        const decoded = jwtDecode(token);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const register = async (newUser) => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await axios.post(`${api}/signup`, newUser);
      const { email, password } = newUser;
      login({ email, password });
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  const login = async (credential) => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await axios.post(`${api}/login`, credential);
      setToken(res.data.accessToken);
      const decoded = jwtDecode(res.data.accessToken);
      console.log(decoded)
      setUser(decoded?.user);
    } catch (err) {
      setError(err);
    }
    // refreshToken();
    setLoading(false);
  };

  const logout = async () => {
    if (loading) return;
    try {
      setCookie('refreshToken', '');
      setUser(false);
      await axios.delete(`${api}/logout`);
    } catch (err) {
      setError(err);
    }
  };

  const refreshToken = async () => {
    if (loading || !getCookie('refreshToken')) return;
    setLoading(true);
    try {
      const response = await axios.get(`${api}/token`);
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setUser(decoded?.user);
      setExpire(decoded?.exp);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

//   useEffect(() => {
//     if (!token) refreshToken();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);


  // Return
  return (
    <AuthContext.Provider
      value={{
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
};
