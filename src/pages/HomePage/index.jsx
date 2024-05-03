import Card from "../../components/Card"
import Header from "@/components/Header";
import HomePageText from "@/components/HomePageText";

export default function Page() {
    return (
        <div className="bg-[#2E1452] overflow-scroll">
            <Header/>
            <HomePageText/>
            <Card/>
        </div>
    );
}