import Link from "next/link";

export default function HomePageCard() {
  return (
    <div className="flex justify-center  pt-[150px] mb-[350px]">
      <div className="flex flex-col w-[1310px] h-[919px] ">
        <div className="flex flex-row">
          <div className="w-[41rem] h-[28.313rem] bg-[#2E1452] bg-no-repeat bg-fondu border-4 border-cyan-500 rounded-[0.938rem] mr-[0.625rem]">
            <div className="flex flex row">
              <div>
                <div className="flex flex-row w-[16.875rem] h-[33px] mt-[36px] ml-[32px]">
                  <img src="/data.svg" alt="" width={33} height={32} />
                  <h1 className="text-white text-[1.5rem] ml-4 font-bold">
                    Base de Données
                  </h1>
                </div>

                <div className="w-[12.5rem] h-[5.438rem] mt-20 ml-[50px] ">
                  <h1 className="text-white text-[1.5rem] font-bold">
                    Gestion centralisée des données client
                  </h1>
                </div>
                <Link href="">
                  <div className=" flex justify-end mt-32 ml-32">
                    <div className="flex flex-row ml-[390px] mt-[40px] ">
                      <button className="text-white text-[15px] font-bold text-end mr-2 flex">
                        Voir plus
                      </button>
                      <img src="/Arrow.svg" alt="" />
                    </div>
                  </div>
                </Link>
              </div>




            </div>
          </div>
          <div className="bg-no-repeat bg-authentification bg-right w-[316px] h-[453px] border-4 border-cyan-500 rounded-[15px] mr-[10px]">
            <div className="flex justify-center mt-6">
              <img src="/Cadenas.svg" alt="" />
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col">
                <div className="flex item-center mt-6">
                  <h1 className="text-white text-center text-[26px] font-bold ml-[15px]">
                    Authentification
                  </h1>
                </div>
                <div className="flex item-center mt-6 w-[230px] h-[124px]">
                  <h1 className="text-white text-[26px] font-bold">
                    Retrouver les utilisateurs de votre base de données.
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-end mr-6 mt-[122px]">
              <Link href="/Realtime">
                <div className="flex flex-row">
                  <button className="text-white text-[15px] font-bold text-end mr-2">
                    Voir plus
                  </button>
                  <img src="/Arrow.svg" alt="" />
                </div>
              </Link>
            </div>
          </div>
          <div className="bg-no-repeat bg-Stockage bg-right w-[316px] h-[453px] border-4 border-cyan-500 rounded-[15px]">
            <div className="flex justify-center mt-6">
              <img src="/Folder.svg" alt="" />
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col">
                <div className="flex item-center mt-6">
                  <h1 className="text-white text-[26px] font-bold ml-[61px]">
                    Stockage
                  </h1>
                </div>
                <div className="flex item-center mt-6 w-[230px] h-[124px]">
                  <h1 className="text-white text-[26px] font-bold">
                    Stockez, organisez et servez des fichiers volumineux.
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex justify-end mr-6 mt-[122px] hover:animate-fade-right">
              <div className="flex flex-row">
                <button className="text-white text-[15px] font-bold text-end mr-2">
                  Voir plus
                </button>
                <img src="/Arrow.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-[17px]">
          <div>
            <div className="bg-no-repeat bg-Realtime w-[740px] h-[222px] ">
              <div className="flex flex-row pt-4 pl-4">
                <img src="/Cursor.svg" alt="" />
                <h1 className="text-white text-[26px] font-bold  ml-2 ">
                  En temps réel
                </h1>
              </div>
              <div className="w-[320px] h-[93px] ml-4 mt-4">
                <h1 className="text-white text-[26px] font-bold">
                  Suivre en temps réel les utilisateur a travers le monde.
                </h1>
              </div>
              <Link href="/Realtime">
                <div>
                  <div className="flex justify-end mr-6 mt-[10px] hover:animate-fade-right">
                    <div className="flex flex-row mt-3">
                      <button className="text-white text-[15px] font-bold text-end mr-2">
                        Voir plus
                      </button>
                      <img src="/Arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>

            </div>
            <div className="bg-no-repeat bg-BG-Performance w-[740px] h-[222px] mt-[8px]">
              <div className="flex flex-row pt-4 pl-4">
                <img src="/Performance.svg" alt="" />
                <h1 className="text-white text-[26px] font-bold  ml-2">
                  Performance
                </h1>
              </div>
              <div className="w-[320px] h-[93px] ml-4 mt-4">
                <h1 className="text-white text-[26px] font-bold">
                  Pilotez vos performances avec des tableaux de bord et des
                  rapports.
                </h1>
              </div>
              <Link href="/Performance">
                <div>
                  <div className="flex justify-end mr-6 mt-[10px] hover:animate-fade-right">
                    <div className="flex flex-row mt-3">
                      <button className="text-white text-[15px] font-bold text-end mr-2">
                        Voir plus
                      </button>
                      <img src="/Arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </Link>

            </div>
          </div>

          <div className="w-[553px] h-[454px] bg-Analyse bg-no-repeat border-4 border-cyan-500 rounded-[15px] ml-[1.339rem]">
            <div>
              <div className="flex flex-row w-[16.875rem] h-[33px] mt-[38px] ml-[48px]">
                <img src="/data.svg" alt="" width={33} height={32} />
                <h1 className="text-white text-[1.5rem] ml-4 font-bold">
                  Analyse
                </h1>
              </div>

              <div className="w-[12.5rem] h-[5.438rem] mt-20 ml-16 ">
                <h1 className="text-white text-[1.5rem] font-bold">
                  Transformez vos données clients en informations exploitables
                </h1>
              </div>
            </div>
            <Link href="/Analyses">
              <div>
                <div className="flex justify-end mr-6 mt-[150px] hover:animate-fade-right">
                  <div className="flex flex-row mt-3">
                    <button className="text-white text-[15px] font-bold text-end mr-2">
                      Voir plus
                    </button>
                    <img src="/Arrow.svg" alt="" />
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
