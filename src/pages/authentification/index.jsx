import React, { useState } from "react";
import SearchBar from "@/app/components/SearchBar";
import Image from "next/image";
import Sidebar from "@/app/components/Sidebar";

const userData = [
  {
    id: "test@test.com",
    size: "22 avr. 2024",
    creationDate: "22 avr. 2024",
    userId: "2",
  },
  {
    id: "test1@test.com",
    size: "22 avr. 2024",
    creationDate: "22 avr. 2024",
    userId: "1",
  },
  {
    id: "test2@test.com",
    size: "22 avr. 2024",
    creationDate: "22 avr. 2024",
    userId: "3",
  },
  {
    id: "test3@test.com",
    size: "22 avr. 2024",
    creationDate: "22 avr. 2024",
    userId: "3",
  },
];

const Tableau = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = userData.filter((user) =>
    user.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex bg-[#2E1452]">
      <Sidebar />
      <div className="p-[4rem] flex flex-col">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-white">Authentification</h1>
          <div className="mt-[2rem] border-b border-[#2BD6D9] w-20">
            <p className="text-white">Utilisateur</p>
          </div>
        </div>

        <div className="mt-[10%] mb-[3%] bg-[#35264A] p-[1rem] border-[#2BD6D9] border rounded-xl ml-[250px] ">
          <div className="mb-[3rem] flex justify-between items-center">
            <SearchBar
              onSearch={setSearchQuery}
              placeholder="Rechercher un utilisateur"
            />
            <button className="bg-[#D9D9D9] text-[#5EA3A5] rounded-md font-bold p-[0.5rem]">
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
                <tr className="border-b-2 border-[#2BD6D9]">
                  <th className="font-bold text-white text-capitalize">
                    Identifiant
                  </th>
                  <th className="font-bold text-white text-capitalize">
                    Taille
                  </th>
                  <th className="font-bold text-white text-capitalize">
                    Date de création
                  </th>
                  <th className="font-bold text-white text-capitalize">
                    UID utilisateur
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((user) => (
                  <tr className="border-b-2 border-[#2BD6D9]" key={user.userId}>
                    <td className="text-white px-10 py-3">{user.id}</td>
                    <td className="text-white px-10 py-3">{user.size}</td>
                    <td className="text-white px-10 py-3">
                      {user.creationDate}
                    </td>
                    <td className="text-white px-10 py-3">{user.userId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tableau;
