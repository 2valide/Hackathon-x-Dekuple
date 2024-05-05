import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";



const Sidebar = () => {
  return (
    <div className="w-[11rem] h-screen  bg-[#35264A]">
      <Link href="/homepage">
          <div className="border-b-2 p-[1rem] border-[#2BD6D9]">
            <Image
              src="/img/logodekuple.svg"
              width={140}
              height={100}
              alt="Logo"
            />
          </div>
      </Link>

      <div className=" flex flex-col  gap-[2rem] text-white text-[0.85rem] p-[0.9rem] font-bold">
        <div className="flex flex-row">
          <Image src="/img/menu.svg" width={25} height={15} alt="" />
        </div>

        <Link href="./authentification">
          <motion.div
            whileHover={{
              scale: 1.1,
              color: "#2BD6D9",
            }}
            className="flex flex-row cursor-pointer"
            >
            <Image src="/img/Vector2.svg" alt="" width={25} height={15} />{" "}
            <p className="ml-[0.5rem] mt-[0.3rem]">Authentification</p>
          </motion.div>
        </Link>

        <Link href="/gestionuser">
          <motion.div
            whileHover={{
              scale: 1.1,
              color: "#2BD6D9",
            }}
            className="flex flex-row cursor-pointer"
            >
            <Image src="/img/Vector.svg" width={25} height={15} alt="" />{" "}
            <p className="ml-[0.5rem]"> Base de Données</p>
          </motion.div>
        </Link>

        <Link href="/stockage">
          <motion.div
            whileHover={{
              scale: 1.1,
              color: "#2BD6D9",
            }}
            className="flex flex-row cursor-pointer"
            >
            <Image src="/img/icon.svg" width={25} height={15} alt="" />{" "}
            <p className="ml-[0.5rem]"> Stockage</p>
          </motion.div>
        </Link>

        <Link href="/realtime"> 
            <motion.div
              whileHover={{
                scale: 1.1,
                color: "#2BD6D9",
              }}
              className="flex flex-row cursor-pointer"
            >
              <Image src="/img/click.svg" width={25} height={15} alt="" />{" "}
              <p className="ml-[0.5rem] mt-[0.4rem]">En temps réel</p>
            </motion.div>
        </Link>

        <Link href="/performance">
            <motion.div
              whileHover={{
                scale: 1.1,
                color: "#2BD6D9",
              }}
              className="flex flex-row cursor-pointer"
            >
              <Image src="/img/graphique.svg" width={25} height={15} alt="" />{" "}
              <p className="ml-[0.5rem]">Performance</p>
            </motion.div>
        </Link>

        <Link href="/analyses">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  color: "#2BD6D9",
                }}
                className="flex flex-row cursor-pointer"
              >
                <Image src="/img/loupe.svg" width={25} height={15} alt="" />{" "}
                <p className="ml-[0.5rem]">Analyse</p>
              </motion.div>
        </Link>

      </div>
    </div>
  );
};

export default Sidebar;
