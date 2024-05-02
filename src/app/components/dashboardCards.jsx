import Link from "next/link";


/**  let google = {
  website: "https://google.com"
  logo: "@img/google-logo.png"
  alt: "google logo"  
  name: "Google"
  status: "En cours"
}
*/
export default function Cards({company}) {
    return (
    <div>
        <div className="flex w-[1090px] h-[205px] bg-[#009699] rounded-md">
            <div className="w-[300px] h-[185px] bg-[#230F49] my-2.5 mx-2.5 flex justify-center items-center rounded-md border border-white">
                <Link href={company.website}><img src={company.logo} alt={company.alt} className="w-[120px] h-[120px]"/></Link>
            </div>
            <div className="text-white flex flex-col justify-between my-2.5 font-medium">
                <h1 className="text-5xl font-bold">{company.name}</h1>
                <div className="flex justify-between text-base">
                    <p className="text-base">Status : {company.status}</p>
                    <p>Voir plus</p>
                </div>
            </div>
        </div>
    </div>
    );
};