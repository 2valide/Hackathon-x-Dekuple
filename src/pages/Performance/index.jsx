import Graphique from "@/app/components/Graphique2/FinalGraphique";
import Sidebar from "@/app/components/Sidebar";

export default function Performance() {
  return (
    <div className="flex bg-[#2E1452] ">
      <Sidebar/>
      <div className="flex flex-">
        <div className="p-[4rem]  ">
          <h1 className="text-2xl font-bold text-white"> Performance </h1>
          <div className=" mt-[2rem]  border-b border-[#2BD6D9]  border-solid">
            <p className="text-white "> Utilisateur </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-32 ml-8">
          <div>
            <Graphique/>
          </div>
        </div>
      </div>

    </div>
  );
}