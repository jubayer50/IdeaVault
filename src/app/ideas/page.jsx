import FilterByCategory from "@/Components/FilterByCategory/FilterByCategory";
import IdeaCard from "@/Components/IdeaCard/IdeaCard";
import SearchBar from "@/Components/SearchBar/SearchBar";
import { getIdeas } from "@/lib/data";

export const metadata = {
  title: "IdeaVault | ideas",
  description:
    "IdeaVault is a web-based platform where users can share innovative startup ideas,explore ideas posted by others, and engage through comments, and discussions.",
};

const IdeasPage = async ({ searchParams }) => {
  const { search, category } = await searchParams;

  console.log(search, "from idea fetch");

  const ideas = await getIdeas(search || "", category || "");

  return (
    <div className="max-w-340 mx-auto px-3 my-10 md:mt-12 md:mb-20">
      <div>
        <div className="space-y-2">
          {" "}
          <h2 className="font-bold text-[28px] md:text-4xl">
            Explore Innovative Ideas
          </h2>
          <p>
            Discover, share, and get inspired by startup ideas from creators
            around the world.
          </p>
        </div>

        <div className="mt-8 rounded-md bg-gray-200 p-3 flex flex-col md:flex-row md:items-center justify-between gap-2">
          <SearchBar></SearchBar>

          <FilterByCategory></FilterByCategory>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-5">
          {ideas.map((idea) => (
            <IdeaCard key={idea._id} idea={idea}></IdeaCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IdeasPage;
