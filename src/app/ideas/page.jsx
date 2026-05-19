import IdeaCard from "@/Components/IdeaCard/IdeaCard";
import { getIdeas } from "@/lib/data";

const IdeasPage = async () => {
  const ideas = await getIdeas();

  console.log(ideas, "from ideas page");

  return (
    <div className="max-w-340 mx-auto px-3 my-10 md:mt-12 md:mb-20">
      <div>
        <div className="space-y-2 text-[#001931] text-center">
          {" "}
          <h2 className="font-bold text-3xl md:text-4xl">
            Explore Innovative Ideas
          </h2>
          <p>
            Discover, share, and get inspired by startup ideas from creators
            around the world.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 items-stretch gap-5">
          {ideas.map((idea) => (
            <IdeaCard key={idea._id} idea={idea}></IdeaCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IdeasPage;
