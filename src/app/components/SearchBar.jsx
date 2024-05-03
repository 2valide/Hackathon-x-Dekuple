import Image from "next/image";

export default function SearchBar({ onSearch, placeholder }) {
  return (
    <>
      <form className={`flex max-h-[44px]`}>
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => onSearch(e.target.value)}
          className="bg-[#D9D9D9] text-[#B8B8B8] w-full p-2 rounded-l-md focus:text-black"
        />
        <button
          type="submit"
          className="flex flex-nowrap bg-[#009699] py-2 gap-2 rounded-r-md w-[200px] justify-center items-center"
        >
          <Image
            src="/img/icons/Loupe.svg"
            width={25}
            height={25}
            alt="Picture of the author"
          />
          <p className="text-white ">Rechercher</p>
        </button>
      </form>
    </>
  );
}

// {
//   /* <SearchBar onSearch={setSearchQuery} placeholder="Rechercher un produit" /> */
// }
