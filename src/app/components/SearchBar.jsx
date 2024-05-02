import Image from "next/image";

export default function SearchBar({ placeholder, maxWidth }) {
  return (
    <>
      <div className={`max-h-[44px] max-w-[${maxWidth}]`}>
        <form className="flex">
          <input
            type="text"
            placeholder={placeholder}
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
      </div>
    </>
  );
}

{
  /* <SearchBar placeholder="Rechercher un produit" maxWidth="700px"/> */
}
