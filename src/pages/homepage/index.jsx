import Header from "@/app/components/Header";
import HomePageText from "@/app/components/HomePageText";
import HomePageCard from "@/app/components/HomepageCard";

export default function Homepage() {
  return (
    <div className="bg-[#2E1452] overflow-scroll">
      <Header />
      <HomePageText />
      <HomePageCard />
    </div>
  );
}
