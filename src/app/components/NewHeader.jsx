
import Link from 'next/link';

const Header=()=>{
    return(
        <div className="bg-[#2E1452] flex justify-center items-center h-20 border-b-2 border-[#2BD6D9]  p-2 pt-4">
            <img src="/img/logo.svg" className="w-22 h-[55px] ml-5 cursor-pointer" />
            <div className="flex justify-between items-center mr-auto p-20 gap-8">
                <Link  href="Acceuil" > 
                <span className="text-white font-bold hover:text-[#2BD6D9] cursor-pointer">Acceuil</span>
                </Link>
                <Link href="Dashboard"> 
                <span className="text-white font-bold hover:text-[#2BD6D9] cursor-pointer">Dashboard</span>
                </Link>
                <Link href="Docs"> 
                <span className="text-white font-bold hover:text-[#2BD6D9] cursor-pointer">Docs</span>
                </Link>
            </div>
            <Link href="Form"> 
            <span className="bg-[#2BD6D9] text-white font-bold flex justify-center items-center w-23 h-[34px]  rounded-lg p-2"><img src="/img/profil.svg" className="w-6 h-3"/> Connexion</span>
            </Link>
        </div>
    )
}
export default Header