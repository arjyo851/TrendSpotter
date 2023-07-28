import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../api/ApiConfig";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  useEffect(() => {
    if (window.localStorage.getItem("auth_token")) {
      window.location.href = "/";
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === "") {
      toast.error("Email can't be empty");
      return;
    } else if (password === "") {
      toast.error("Password can't be empty");
      return;
    } else if (!email.match(mailFormat)) {
      toast.error("Invalid Email");
      return;
    } else {
      Api.post("auth/login/", {
        email,
        password,
      })
        .then((res) => {
          console.log(res.status);
          window.localStorage.setItem(
            "auth_token",
            res.data.data.auth_token.access
          );
          window.localStorage.setItem("user", res.data.data.user.first_name);
          window.location.href = "/";
          toast.success("User successfully logged in");
        })
        .catch((err) => {
          console.log(err.message);
          toast.error("Invalid Credentials");
        });
    }
  }

  return (
    <div className="h-screen md:flex">
      <div
        className="relative overflow-hidden bg-cover bg-center  md:flex w-1/2 justify-around items-start hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1494652588305-d663c5a1eb31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NjMwOTIzOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')`,
        }}
      >
        <div>
          <p className="text-white mt-1"> </p>
          <p className="text-white mt-1"></p>
          <p className="text-white mt-1"></p>
        </div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white">
          <h1 className="text-gray-800 font-bold text-4xl mb-12 text-center">
            Log in to Trend Spotter
          </h1>

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none w-80"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                const element: HTMLInputElement = e.target;
                setEmail(element.value);
              }}
              required
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-xl mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none w-80"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                const element: HTMLInputElement = e.target;
                setPassword(element.value);
              }}
              required
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-black mt-4 py-2 rounded-2xl text-white font-semibold mt-6"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className="mt-4 text-xs font-medium text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-blue-600 hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
