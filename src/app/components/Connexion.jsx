
import Link from 'next/link';

const Form = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#2E1452] h-screen pb-[12.5rem]">
      <h1 className=" text-2xl text-white pt-[6.25rem] pr-[10.625rem] font-bold">Se connecter</h1>
      <div className="w-[20.625rem] h-[23.75rem] m-auto shadow-lg bg-[#009699] rounded-md p-9">
        <div className="mt-[0.5rem]">
            <label for="email" className="text-white font-bold"> Se connecter avec un mail</label>
            <input type="email" className="mt-[0.1875rem] rounded-md p-[0.0625rem] w-full"/>
            </div>
            <div className="mt-[1rem]">
            <label for="login" className="text-white font-bold">Mot de passe </label>
            <input type="login" className="mt-[0.1875rem] rounded-md p-[0.0625rem] w-full"/>
        <div className="ml-[7.5625rem]">
        <Link href="#" >
              <span className="text-white text-sm">Mot de passe oublié ?</span>
            </Link>
        </div>
        </div>
        <div>
            <input type="checkbox" className="mt-[1.5rem]"></input>
            <label className="text-white text-sm"> Se souvenir de moi </label>
        </div>
        <div className="flex justify-center items-center mt-[40px]">
            <button className="bg-[#2E1452] text-white cursor-pointer rounded-lg p-3">
                    Se connecter
            </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
