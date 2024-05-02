import SearchBar from "@/app/components/SearchBar";

export default function Accueil() {
  return (
    <div>
      <div className="rounded-md">
        <SearchBar placeholder="Rechercher un produit" />
      </div>
    </div>
  );
}
