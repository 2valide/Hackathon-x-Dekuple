import Image from "next/image";

export default function SearchBar({ placeholder }) {
  return (
    <>
      <div>
        <form className="flex">
          <input
            type="text"
            placeholder={placeholder}
            className="bg-[#D9D9D9] text-[#B8B8B8] w-full p-2 rounded-l-md"
          />
          <button
            type="submit"
            className="flex flex-nowrap bg-[#009699] p-2 gap-2"
          >
            <Image
              src="/img/icons/Loupe.svg"
              width={25}
              height={25}
              alt="Picture of the author"
            />
            <span className="text-white ">Rechercher</span>
          </button>
        </form>
      </div>
    </>
  );
}
