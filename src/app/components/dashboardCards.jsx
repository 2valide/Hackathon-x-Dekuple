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
        <div className="flex bg-black">
            <Link href={company.website}><img src={company.logo} alt={company.alt}/></Link>
            <div className="">
                <h1 className="text-5xl">{company.name}</h1>
                <div className="flex justify-between text-base">
                    <p className="text-base">Status : {company.status}</p>
                    <p>Voir plus</p>
                </div>
            </div>
        </div>
    </div>
    );
};