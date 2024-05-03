import SidebarClose from "./SidebarClose";
import SearchBar from "./SearchBar";
import Image from "next/image";
const Tableau = () => {
  return (
    // SIDEBAR
    <div className="flex bg-[#2E1452]">
      <SidebarClose />
      <div className="p-[4rem]  ">
        <h1 className="text-2xl font-bold text-white">Stockage</h1>
        <div className=" mt-[2rem]  border-b-2 border-[#2BD6D9]">
          <p className="text-white ">Stockage</p>
        </div>
      </div>

      {/* TABLEAUX */}

      <div className="mt-[15%] bg-[#35264A] p-[1rem] rounded-xl ">
        <div className="mb-[2rem] flex justify-between">
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

        <div>
          <table>
            <thead>
              <tr className="border-b-2 border-[#2BD6D9]">
                <th className="font-bold text-white text-capitalize "> UID </th>
                <th className="font-bold text-white text-capitalize">
                  {" "}
                  Taille{" "}
                </th>
                <th className="font-bold text-white text-capitalize"> Type </th>
                <th className="font-bold text-white text-capitalize">
                  {" "}
                  DerniÃ¨re modification{" "}
                </th>
              </tr>
            </thead>
            <thead>
              <tr className="border-b-2 border-[#2BD6D9]">
                <td className="text-white px-10 py-3">
                  09fe49b34d2b471cac0436c9e
                </td>
                <td className="text-white px-10 py-3">122mo</td>
                <td className="text-white px-10 py-3">TXT</td>
                <td className="text-white px-10 py-3">22 avril 2024</td>
              </tr>
            </thead>
            <thead>
              <tr className="border-b-2 border-[#2BD6D9]">
                <td className="text-white px-10 py-3">LALALALALA</td>
                <td className="text-white px-10 py-3">LALALALALA</td>
                <td className="text-white px-10 py-3">LALALALALA</td>
                <td className="text-white px-10 py-3">LALALALALA</td>
              </tr>
            </thead>
            <thead>
              <tr className="border-b-2 border-[#2BD6D9]">
                <td className="text-white px-10 py-3">LALALALALA</td>
                <td className="text-white px-10 py-3">LALALALALA</td>
                <td className="text-white px-10 py-3">LALALALALA</td>
                <td className="text-white px-10 py-3">LALALALALA</td>
              </tr>
            </thead>
            <thead>
              <tr className="border-b-2 border-[#2BD6D9]">
                <td className="text-white px-10 py-3">LALALALALA</td>
                <td className="text-white px-10 py-3">LALALALALA</td>
                <td className="text-white px-10 py-3">LALALALALA</td>
                <td className="text-white px-10 py-3">LALALALALA</td>
              </tr>
            </thead>
            <thead>
              <tr className="border-b-2 border-[#2BD6D9]">
                <td className="text-white px-10 py-3">LALALALALA</td>
                <td className="text-white px-10 py-3">LALALALALA</td>
                <td className="text-white px-10 py-3">LALALALALA</td>
                <td className="text-white px-10 py-3">LALALALALA</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tableau;
