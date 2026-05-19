import { getTrendingIdeas } from "@/lib/data";
import IdeaCard from "../IdeaCard/IdeaCard";

const TrendingIdeas = async () => {
  const trendingIdeas = await getTrendingIdeas();

  return (
    <div className="max-w-340 px-3 mx-auto py-12 md:py-16">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Trending Innovations</h2>
        <p>The most impactful startup ideas gaining attention and traction.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingIdeas.map((trendingIdea) => (
          <IdeaCard key={trendingIdea._id} idea={trendingIdea}></IdeaCard>
        ))}
      </div>
    </div>
  );
};

export default TrendingIdeas;
