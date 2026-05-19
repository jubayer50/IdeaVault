import Banner from "@/Components/Banner/Banner";
import Community from "@/Components/Community/Community";

import GreatStartup from "@/Components/GreatStartup/GreatStartup";
import TrendingIdeas from "@/Components/TrendingIdeas/TrendingIdeas";

export default function Home() {
  return (
    <div>
      <Banner></Banner>

      <GreatStartup></GreatStartup>

      <Community></Community>

      <TrendingIdeas></TrendingIdeas>
    </div>
  );
}
