import React, { useState } from "react";
import SidebarClose from "./SidebarClose";
import SearchBar from "./SearchBar";
import Image from "next/image";

const initialData = [
  {
    uid: "09fe49b34d2b471cac0436c9e",
    size: "122mo",
    type: "TXT",
    lastModified: "22 avril 2024",
  },
  {
    uid: "a3dcb4d229de40948202a5d725cdae5d",
    size: "104mo",
    type: "PDF",
    lastModified: "20 avril 2024",
  },
  // More entries here
];

const Tableau = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(initialData);
  const filteredData = data.filter((item) =>
    item.uid.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="mt-[15%] bg-[#35264A] p-[1rem] rounded-xl">
        <div className="mb-[2rem] flex justify-between">
          <SearchBar
            onSearch={setSearchQuery}
            placeholder="Rechercher par UID"
          />
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
                <th className="font-bold text-white text-capitalize">UID</th>
                <th className="font-bold text-white text-capitalize">Taille</th>
                <th className="font-bold text-white text-capitalize">Type</th>
                <th className="font-bold text-white text-capitalize">
                  Dernière modification
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr className="border-b-2 border-[#2BD6D9]" key={item.uid}>
                  <td className="text-white px-10 py-3">{item.uid}</td>
                  <td className="text-white px-10 py-3">{item.size}</td>
                  <td className="text-white px-10 py-3">{item.type}</td>
                  <td className="text-white px-10 py-3">{item.lastModified}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tableau;
