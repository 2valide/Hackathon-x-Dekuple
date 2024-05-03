import { useState } from "react";

import SearchBar from "@/app/components/SearchBar";
import FilterBtn from "@/app/components/FilterBtn";
import DashboardCards from "@/app/components/dashboardCards";
import Header from "@/app/components/Header";

function Dashboard() {
  const [BtnFilter, setBtnFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      id: "1",
      name: "CHANEL",
      status: "En cours",
      website: "https://www.chanel.com",
      logo: "/path/to/chanel-logo.png",
      alt: "Chanel logo",
    },
    {
      id: "2",
      name: "Volkswagen",
      status: "En cours",
      website: "https://www.volkswagen.com",
      logo: "/path/to/vw-logo.png",
      alt: "Volkswagen logo",
    },
    // autre projets
  ];

  const filteredProjects = projects.filter(
    (project) =>
      (BtnFilter ? project.status === BtnFilter : true) &&
      project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-background-colors h-screen overflow-scroll flex flex-col gap-20">
      <Header />
      <div className="flex flex-col items-center gap-5">
        <div className="w-[700px]">
          <SearchBar
            placeholder="Rechercher un produit"
            onSearch={setSearchQuery}
          />
        </div>
        <FilterBtn onFilter={setBtnFilter} />
        {filteredProjects.map((project) => (
          <DashboardCards key={project.id} company={project} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
// dsds
