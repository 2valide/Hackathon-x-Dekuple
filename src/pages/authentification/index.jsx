import SearchBar from "@/app/components/SearchBar";
import Image from "next/image";
import SidebarClose from "@/app/components/SidebarClose";
const Tableau = () => {
  return (
    // SIDEBAR
    <div className=" flex  bg-[#2E1452] ">
      <SidebarClose />
      <div className="p-[4rem]  flex">
        <div className="flex-col flex">
          <h1 className="text-2xl font-bold text-white"> Authentification </h1>
          <div className=" mt-[2rem]  border-b border-[#2BD6D9]">
            <p className="text-white "> Utilisateur </p>
          </div>
        </div>

        {/* TABLEAUX */}
        <div className="mt-[10%] mb-[3%]  bg-[#35264A] p-[1rem] border-[#2BD6D9] border rounded-xl ">
          <div className="mb-[3rem] flex justify-between items-center">
            <SearchBar />
            <button className="bg-[#D9D9D9] text-[#5EA3A5] rounded-md font-bold p-[0.5rem] ">
              Ajouter un utilisateur
            </button>
            <button>
              <Image
                src="/img/roulette.svg"
                width={37}
                height={37}
                alt="image actualisation"
              />
            </button>
          </div>
          <div className="pb-[180px]">
            <table>
              <thead>
                <tr className="border-b-2 border-[#2BD6D9] ">
                  <th className="font-bold text-white text-capitalize ">
                    {" "}
                    Identifiant{" "}
                  </th>
                  <th className="font-bold text-white text-capitalize">
                    Taille
                  </th>
                  <th className="font-bold text-white text-capitalize">
                    {" "}
                    Date de création{" "}
                  </th>
                  <th className="font-bold text-white text-capitalize">
                    UID utilisateur
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-[#2BD6D9]">
                  <td className="text-white px-10 py-3">
                    maoni.modulo@gmail.com
                  </td>
                  <td className="text-white px-10 py-3">22 avr. 2024</td>
                  <td className="text-white px-10 py-3">22 avr. 2024</td>
                  <td className="text-white px-10 py-3">
                    09fe49b34d2b471cac0436c9e
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tableau;

//dsq
