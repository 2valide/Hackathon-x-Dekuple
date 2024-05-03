const Header = () => {
  return (
    <div className="bg-[#2E1452] flex justify-between items-center h-20 border-b-2 border-[#2BD6D9]  p-2 pt-4">
      <img
        src="/img/icons/logo.svg"
        className="w-22 h-20 ml-5 cursor-pointer"
      />
      <div className="flex justify-between items-center mr-auto p-20 gap-8">
        <a
          href="Acceuil"
          className="text-white hover:text-[#2BD6D9] cursor-pointer"
        >
          Acceuil
        </a>
        <a
          href="Dashboard"
          className="text-white hover:text-[#2BD6D9] cursor-pointer"
        >
          Dashboard
        </a>
        <a
          href="Docs"
          className="text-white hover:text-[#2BD6D9] cursor-pointer"
        >
          Docs
        </a>
      </div>
      <a
        href="Form"
        className="bg-[#2BD6D9] text-white flex justify-center items-center w-23 h-23 mr-5 rounded-lg p-2"
      >
        <img src="/img/icons/profil.svg" className="w-7 h-5" /> Connexion
      </a>
    </div>
  );
};
export default Header;
