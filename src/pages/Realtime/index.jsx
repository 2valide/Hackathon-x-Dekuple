import Graphique from "@/app/components/Graphique/FinalGraphique";
import Sidebar from "@/app/components/Sidebar";

export default function Page() {
  return (
    <div className="flex flex-row bg-[#2E1452] overflow-scroll">
      <div>
        <Sidebar />
      </div>
      <div className="flex justify center">
        <Graphique />
      </div>
    </div>
  );
}
