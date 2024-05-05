import Sidebar from "@/app/components/Sidebar";
import Tableau from "@/app/components/Tableaux";


export default function GestionUser() {
  return (
    <div className="flex bg-[#2E1452] ">
      <Sidebar/>
      <div className="flex flex-col">
        <div className="p-[4rem]  ">
          <h1 className="text-2xl font-bold text-white"> Stockage </h1>
          <div className=" mt-[2rem]  border-b border-[#2BD6D9]  border-solid w-20">
            <p className="text-white  "> Utilisateur </p>
          </div>
        </div>
        <div className="flex justify-center items-center  ml-[250px]">
          <div>
          <Tableau/>
          </div>
        </div>
      </div>

    </div>
  );
}