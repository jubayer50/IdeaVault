import Banner from "@/Components/Banner/Banner";
import Community from "@/Components/Community/Community";

import GreatStartup from "@/Components/GreatStartup/GreatStartup";
import TrendingIdeas from "@/Components/TrendingIdeas/TrendingIdeas";

export const metadata = {
  title: "IdeaVault | home",
  description:
    "IdeaVault is a web-based platform where users can share innovative startup ideas,explore ideas posted by others, and engage through comments, and discussions.",
};

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
