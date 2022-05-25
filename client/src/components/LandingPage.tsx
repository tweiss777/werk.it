import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import LogoLandingPageSVG from "./LogoLandingPageSVG";
import LogoSVG from "./LogoSVG";

export default function LandingPage() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const newUser = {
        email,
        password,
      };
      console.log("newUser", newUser);
      await login(newUser);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="flex flex-col justify-center items-center gap-0  h-screen w-screen w-screen  content-center justify-self-center">
      <div>
    <LogoLandingPageSVG />
      </div>
      <form className="justify-self-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3" style={{marginTop: "-10rem"}}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            placeholder="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            placeholder="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p> */}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
            style={{ backgroundColor: "#b10595" }}
          >
            Login
          </button>
          <a>Forgot Password?</a>
        </div>
      </form>
    </div>
  );
}
