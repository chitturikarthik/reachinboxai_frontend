import { Link, useNavigate } from "react-router-dom"; // Import Link from React Router DOM
import logo from "../assets/logo.png";
import google from "../assets/google.svg";

function Login() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  
  if (token) {
    navigate("/");
  }
  if (!token) {
    navigate("/login");
  }

  const handleGoogleLogin = () => {
    // Redirect to Google login URL
    window.location.href =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/onebox";
  };

  return (
    <>
      <div className="border-gray-800 bg-black border-b-2 fixed text-white h-16 w-screen flex items-center justify-center">
        <div>
          <img src={logo} alt="logo_reachinbox" className="h-10" />
        </div>
      </div>

      <div className="bg-black text-white w-screen h-screen flex flex-col justify-center items-center">
        <div className="bg-gray-900 text-center space-y-10 px-16 rounded-2xl border border-gray-700">
          <div>
            <div className="text-xl font-semibold mt-6">
              Create a new account
            </div>
            <div
              className="w-full mt-6 border border-zinc-600  px-8 py-2 text-sm flex items-center text-gray-400 rounded-lg cursor-pointer"
              onClick={handleGoogleLogin}
            >
              <img src={google} alt="google" className="w-4 mr-3" />
              Sign Up with Google
            </div>
          </div>
          <div>
            <Link
              to="/register"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-900 mt-5 px-6 text-sm py-3 rounded-md cursor-pointer"
            >
              Create an Account
            </Link>
            <div className="my-8 mb-10 text-gray-500 text-sm">
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-400">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900 flex justify-center items-center text-sm bottom-0 fixed w-screen h-8 text-zinc-400">
        © 2024 Reachinbox. All rights reserved.
      </div>
    </>
  );
}

export default Login;
