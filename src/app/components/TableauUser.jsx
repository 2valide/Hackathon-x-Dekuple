import Image from "next/image";
const TableauUser = () => {
  return (
          <div className="w-[42rem] h-[31.25rem] bg-[#35264A] rounded-xl text-white border-[#2BD6D9] border-2 ">
          <div className="p-[1rem]">
            <div className="flex w-[18.75]">
              <Image src="/House_User.svg" width={30} height={20} alt="House" className="mr-4" />
              <Image
                src="/Arrow_User.svg"
                width={28}
                height={35}
                alt="ArrowUser"
                className="mr-4"
              />
              <h2 className="font-bold mt-[0.5rem] mr-4">User</h2>
              <Image
                src="/Arrow_User.svg"
                width={28}
                height={40}
                alt="ArrowUser"
                className="mr-4"
              />
              <h2 className="font-bold mt-[0.5rem]">09fe49b</h2>
            </div>
          </div>

          <div>
            <table>
              <thead>
                <tr>
                  <th className="border-t-2 border-b-2 border-r-2 border-[#2BD6D9]">
                    Base de données
                  </th>
                  <th className="border-2 border-[#2BD6D9] px-4 py-2 ">User</th>
                  <th className="border-t-2 border-b-2 border-l-2 border-[#2BD6D9] px-4 py-2 ">
                    09fe49b34d2b471cac0436c9d2b471A
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t-2 border-b-2 border-r-2 border-[#2BD6D9] px-4 py-2 text-bold bg-[#5F497D] ">
                    User
                  </td>
                  <td className="border-t-2 border-b-2 border-r-2 border-[#2BD6D9] px-4 py-2 text-bold bg-[#5F497D]">
                    09fe49b34d2b471cac0436c9e
                  </td>
                  <td className="border-t-2 border-b-2 border-[#2BD6D9] px-4 py-2 text-bold">
                    email: “maoni.modulo@gmail.com”
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    
  );
};

export default TableauUser;
