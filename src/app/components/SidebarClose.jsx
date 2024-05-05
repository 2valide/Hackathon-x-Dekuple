import { motion } from "framer-motion";
import Image from "next/image";
const SidebarClose = () => {
  return (
    <div className="w-[5rem] h-screen bg-[#35264A]">
      <div className="border-b-2 p-[1rem] border-[#2BD6D9]">
        <Image
          src="/img/logo_sidebarclose.svg"
          width={140}
          height={100}
          alt="zsqedgfze"
        />
      </div>

      <div className=" flex flex-col  gap-[2rem] items-center mt-[1rem] font-bold">
        <motion.div
          whileHover={{
            scale: 1.2,
          }}
          className="flex flex-row cursor-pointer"
        >
          <Image src="/img/menu.svg" width={25} height={15} alt="" />
        </motion.div>

        <div
          whileHover={{
            scale: 1.1,
            color: "#2BD6D9",
          }}
          className="flex flex-row cursor-pointer"
        >
          <Image src="/img/Vector2.svg" alt="" width={25} height={15} />
        </div>

        <div
          whileHover={{
            scale: 1.1,
            color: "#2BD6D9",
          }}
          className="flex flex-row cursor-pointer"
        >
          <Image src="/img/Vector.svg" width={25} height={15} alt="" />
        </div>

        <div
          whileHover={{
            scale: 1.1,
            color: "#2BD6D9",
          }}
          className="flex flex-row cursor-pointer"
        >
          <Image src="/img/icon.svg" width={25} height={15} alt="" />
        </div>

        <div
          whileHover={{
            scale: 1.1,
            color: "#2BD6D9",
          }}
          className="flex flex-row cursor-pointer"
        >
          <Image src="/img/click.svg" width={25} height={15} alt="" />
        </div>

        <div
          whileHover={{
            scale: 1.1,
            color: "#2BD6D9",
          }}
          className="flex flex-row cursor-pointer"
        >
          <Image src="/img/graphique.svg" width={25} height={15} alt="" />
        </div>

        <div
          whileHover={{
            scale: 1.1,
            color: "#2BD6D9",
          }}
          className="flex flex-row cursor-pointer"
        >
          <Image src="/img/loupe.svg" width={25} height={15} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SidebarClose;
