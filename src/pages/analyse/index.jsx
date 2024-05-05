import Graphique3 from "@/app/components/Graphique3/FinalGraphique";
import Sidebar from "@/app/components/Sidebar";

export default function Analyses() {
  return (
    <div className="flex bg-[#2E1452] ">
      <Sidebar />
      <div className="flex flex-">
        <div className="p-[4rem]  ">
          <h1 className="text-2xl font-bold text-white"> Analyse </h1>
          <div className=" mt-[2rem]  border-b border-[#2BD6D9]  border-solid">
            <p className="text-white "> Utilisateur </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-32 ml-8">
          <div>
            <Graphique3 />
          </div>
        </div>
      </div>
    </div>
  );
}
