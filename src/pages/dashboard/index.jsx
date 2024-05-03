import Cards from "@components/dashboardCards";
import Link from "next/link";

export default function Dashboard() {
  return (
    <Cards
      company={{
        website: "https://google.com",
        logo: "@img/google-logo.png",
        alt: "google logo",
        name: "Google",
        status: "En cours",
      }}
    />
  );
}
