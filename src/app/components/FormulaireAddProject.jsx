import Link from "next/link";

const FormulaireAddProject = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#2E1452] h-screen pb-[12.5rem]">
      <h1 className=" text-2xl text-white pt-[6.25rem]  font-bold">
        {" "}
        Général{" "}
      </h1>
      <form>
        <div className="w-[21rem] h-[24.75rem] m-auto shadow-lg bg-[#009699] rounded-md p-9">
          <div className="mt-[0.5rem]">
            <label for="text" className="text-white font-bold">
              {" "}
              Entrprise{" "}
            </label>
            <input
              type="text"
              className="mt-[0.1875rem] rounded-md p-[0.0625rem] w-full"
            />
          </div>
          <div className="mt-[0.5rem]">
            <label for="text" className="text-white font-bold">
              {" "}
              L url de l Entrprise{" "}
            </label>
            <input
              type="text"
              className="mt-[0.1875rem] rounded-md p-[0.0625rem] w-full"
            />
          </div>
          <div className="mt-[0.5rem]">
            <label for="text" className="text-white font-bold">
              {" "}
              Statut{" "}
            </label>
            <input
              type="text"
              className="mt-[0.1875rem] rounded-md p-[0.0625rem] w-full"
            />
            <div className="mt-[0.5rem]">
              <label
                for="UploadFile"
                className="text-white font-bold rounded-md "
              >
                {" "}
                Ajouter une image{" "}
              </label>
              <input
                type="file"
                name="UploadFile"
                className="mt-[0.1875rem] p-[0.0625rem] w-full"
              />
            </div>
          </div>

          <div className="flex justify-center items-center mt-[40px]">
            <button className="bg-[#2E1452] text-white cursor-pointer rounded-lg p-3">
              Creer votre prrojet
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormulaireAddProject;
