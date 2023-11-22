import React from "react";

import LoginForm from "../_components/LoginForm";
import Backbtn from "@/components/Backbtn";

const Login = () => {
  return (
    <div className="w-full h-screen flex-col flex justify-center items-center gap-8 relative">
      <div>
        <Backbtn />
      </div>

      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#222]">
          Login to <span className="text-primary">Markitup</span>
        </h1>
      </div>

      <div className="w-full sm:w-[400px] py-6 px-6 border mt-3 rounded-md bg-white">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
