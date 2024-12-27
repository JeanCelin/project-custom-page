import MainDefault from "@/components/Mains/MainDefault";
import NavbarDefault from "@/components/Navbars/NavDefault/NavbarDefault";
import FooterDefault from "@/components/Footers/FooterDefault/FooterDefault";
import { useRouter } from "next/router";

export default function PreviewPage() {
  const router = useRouter();
  const { navbar, main, footer } = router.query;

  return (
    <div>
      <h1>Preview Your Page</h1>
      <NavbarDefault />
      <MainDefault />
      <FooterDefault />
    </div>
  );
}
