import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push("/homepage");
  }, [router]);

  return <div></div>;
}