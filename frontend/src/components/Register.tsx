import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../api/ApiConfig";

function Register() {
  useEffect(() => {
    if (window.localStorage.getItem("auth_token")) {
      window.location.href = "/";
    }
  }, []);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [first, setFirstName] = useState<string>();
  const [last, setLastName] = useState<string>();
  const [username, setUsername] = useState<string>();
  function handleRegister(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    Api.post("auth/signup/", {
      email,
      password,
      username,
      first_name: first,
      last_name: last
    }).then((res) => {
      window.location.href = "/login";
    });
  }
  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">
            FashioRecommender
          </h1>
          <p className="text-white mt-1">  </p>
          <p className="text-white mt-1">  </p>
          <p className="text-white mt-1">  </p>

          {/* <h1 className="text-white font-bold text-4xl font-sans text-center">
            Sign Up
          </h1> */}

        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Hello There!
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-7">
            Please Sign Up
          </p>

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <input
              className="pl-2 outline-none border-none w-80"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                const element: HTMLInputElement = e.target;
                setEmail(element.value);
              }} />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <input
              className="pl-2 outline-none border-none w-80"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                const element: HTMLInputElement = e.target;
                setPassword(element.value);
              }} />
          </div>

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>

            <input
              className="pl-2 outline-none border-none w-80"
              type="text"
              placeholder="First Name"
              value={first}
              onChange={(e) => {
                const element: HTMLInputElement = e.target;
                setFirstName(element.value);
              }} />
          </div>

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>

            <input
              className="pl-2 outline-none border-none w-80"
              type="text"
              placeholder="Last Name"
              value={last}
              onChange={(e) => {
                const element: HTMLInputElement = e.target;
                setLastName(element.value);
              }} />
          </div>

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20l-5-5-5 5M21 16V8a4 4 0 00-4-4H7a4 4 0 00-4 4v8a4 4 0 004 4h10a4 4 0 004-4zM7 12H5" />
            </svg>

            <input
              className="pl-2 outline-none border-none w-80"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                const element: HTMLInputElement = e.target;
                setUsername(element.value);
              }} />
          </div>
          <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2" onClick={handleRegister}>

            Register
          </button>
          <p className="mt-4 text-xs font-medium text-center text-gray-700">
            {" "}
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>

      </div>
    </div>
  );
}

export default Register;
