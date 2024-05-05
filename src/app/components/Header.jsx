import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-[#2E1452] flex justify-between items-center h-20 border-b-2 border-[#2BD6D9]  p-2 pt-4">
      <img src="/logo.svg" className="w-22 h-20 ml-5 cursor-pointer" />
      <div className="flex justify-between items-center mr-auto p-20 gap-8">
        <Link href="/HomePage">
          <p className="text-white hover:text-[#2BD6D9] cursor-pointer">
            Acceuil
          </p>
        </Link>
        <Link href="/Dashboard">
          <p className="text-white hover:text-[#2BD6D9] cursor-pointer">
            Dashboard
          </p>
        </Link>
        {/* <Link href="/Docs">
          <p className="text-white hover:text-[#2BD6D9] cursor-pointer">Docs</p>
        </Link> */}
      </div>
      <Link href="Connexion">
        <p className="bg-[#2BD6D9] text-white flex justify-center items-center w-23 h-23 mr-5 rounded-lg p-2">
          <img src="/USER.svg" className="w-7 h-5" /> Connexion
        </p>
      </Link>
    </div>
  );
};
export default Header;
