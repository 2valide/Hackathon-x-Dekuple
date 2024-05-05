import { useState } from "react";
import Link from "next/link";

const ConnexionForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      window.location.href = "/dashboard";
    } else {
      setErrorMessage(data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center bg-[#2E1452] h-screen pb-[12.5rem]"
    >
      <h1 className=" text-2xl text-white pt-[6.25rem] pr-[10.625rem] font-bold mb-2">
        Se connecter
      </h1>
      <div className="w-[20.625rem] h-[23.75rem] shadow-lg bg-[#009699] rounded-md p-9">
        <div className="mt-[0.5rem]">
          <label for="email" className="text-white font-bold">
            Se connecter avec un mail
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-[0.1875rem] rounded-md p-[0.0625rem] w-full"
          />
        </div>
        <div className="mt-[1rem]">
          <label for="password" className="text-white font-bold">
            Mot de passe
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-[0.1875rem] rounded-md p-[0.0625rem] w-full"
          />
          <div className="ml-[7.5625rem]">
            <Link href="#">
              <span className="text-white text-sm">Mot de passe oublié ?</span>
            </Link>
          </div>
        </div>
        <div>
          <input type="checkbox" className="mt-[1.5rem]"></input>
          <label className="text-white text-sm"> Se souvenir de moi </label>
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="flex justify-center items-center mt-[40px]">
          <button className="bg-[#2E1452] text-white cursor-pointer rounded-lg p-3">
            Se connecter
          </button>
        </div>
      </div>
    </form>
  );
};

export default ConnexionForm;
