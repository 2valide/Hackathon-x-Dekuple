function FilterBtn({ onFilter }) {
  const styles = "bg-[#D9D9D9] text-black p-2 rounded-md m-1 font-bold";
  return (
    <div>
      <button
        className={`${styles} hover:bg-red-700`}
        onClick={() => onFilter("Non traité")}
      >
        Non traité
      </button>
      <button
        className={`${styles} hover:bg-yellow-600`}
        onClick={() => onFilter("En cours")}
      >
        En cours
      </button>
      <button
        className={`${styles} hover:bg-green-800`}
        onClick={() => onFilter("Traitement fini")}
      >
        Traitement fini
      </button>
      <button className={`${styles}`} onClick={() => onFilter("")}>
        Voir tous
      </button>
    </div>
  );
}

export default FilterBtn;
