import Banner from "@/Components/Banner/Banner";
import Community from "@/Components/Community/Community";
import Footer from "@/Components/Footer/Footer";
import GreatStartup from "@/Components/GreatStartup/GreatStartup";

export default function Home() {
  return (
    <div>
      <Banner></Banner>

      <GreatStartup></GreatStartup>

      <Community></Community>

      <Footer></Footer>
    </div>
  );
}
