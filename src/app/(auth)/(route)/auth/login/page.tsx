"use client";
import { signIn } from "next-auth/react";
import React from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();

    // console.log(email, password);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log(res);
    
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
