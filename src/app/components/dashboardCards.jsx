import Link from "next/link";

/**  let google = {
  website: "https://google.com"
  logo: "@img/google-logo.png"
  alt: "google logo"  
  name: "Google"
  status: "En cours"
}
*/
export default function DashboardCards({ company }) {
  return (
    <div>
      <div className="flex w-[990px] h-[205px] bg-[#009699] py-2.5 px-2.5 rounded-md">
        <div className="w-[300px] h-[185px] bg-[#230F49] mr-2.5 flex justify-center items-center rounded-md border border-white">
          <Link href={company.website}>
            <img
              src={company.logo}
              alt={company.alt}
              className="w-[120px] h-[120px]"
            />
          </Link>
        </div>
        <div className="text-white flex flex-col justify-between font-medium w-full">
          <h1 className="text-5xl font-bold">{company.name}</h1>
          <div className="flex justify-between flex-row text-base w-full">
            <p className="text-base">Status : {company.status}</p>
            <Link href="#">
              <p>Voir plus</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
