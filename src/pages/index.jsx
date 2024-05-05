import SearchBar from "@/app/components/SearchBar";

export default function Accueil() {
  return (
    <div>
      <div className="w-[770px]">
        <SearchBar placeholder="Rechercher un produit" />
      </div>
    </div>
  );
}
