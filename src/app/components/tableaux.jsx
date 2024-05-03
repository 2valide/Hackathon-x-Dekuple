
import SearchBar from './SearchBar';
const Tableau=()=>{
    return(
    
    <div className="mt-8">
        <SearchBar />
            <table className=" m-auto pb-[300px] border-collapse border border-blue-300 rounded-md">
                <thead>
                    <tr>
                        <th className="font-bold text-white text-capitalize"> UID </th>
                        <th className="font-bold text-white text-capitalize"> Taille </th>
                        <th className="font-bold text-white text-capitalize"> Type </th>
                        <th className="font-bold text-white text-capitalize"> Dernière mmodification </th>
                    </tr>
                </thead>
                <thead>
                    <tr className="border-b-2 border-black">
                        <td className="text-white px-10 py-3">LALALALALA</td>
                        <td className="text-white px-10 py-3">LALALALALA</td>
                        <td className="text-white px-10 py-3">LALALALALA</td>
                        <td className="text-white px-10 py-3">LALALALALA</td>
                    </tr>
                </thead>
                <thead>
                    <tr className="border-b-2 border-black">
                        <td className="text-white px-10 py-3">LALALALALA</td>
                        <td className="text-white px-10 py-3">LALALALALA</td>
                        <td className="text-white px-10 py-3">LALALALALA</td>
                        <td className="text-white px-10 py-3">LALALALALA</td>
                    </tr>
                </thead>
                <thead>
                    <tr className="border-b-2 border-black">
                        <td className="text-white px-10 py-3">LALALALALA</td>
                        <td className="text-white px-10 py-3">LALALALALA</td>
                        <td className="text-white px-10 py-3">LALALALALA</td>
                        <td className="text-white px-10 py-3">LALALALALA</td>
                    </tr>
                </thead>
            </table>
    </div>
);
}

export default Tableau