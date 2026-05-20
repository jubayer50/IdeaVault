import MyIdeaCard from "@/Components/MyIdeaCard/MyIdeaCard";
import { auth } from "@/lib/auth";
import { getIdeas } from "@/lib/data";
import { headers } from "next/headers";

const MyIdeasPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { id } = session?.user;

  const ideas = await getIdeas();

  const myIdeas = ideas.filter((idea) => idea.userid === id);

  return (
    <div className="max-w-340 mx-auto px-3 my-8 md:my-16">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">Your Innovation Hub</h2>
        <p className="mt-1.5">
          All your startup ideas organized in one place—create, review, and
          refine them as you grow your vision.
        </p>
      </div>

      <div className="mt-6 space-y-4">
        {myIdeas.map((myIdea) => (
          <MyIdeaCard key={myIdea._id} myIdea={myIdea}></MyIdeaCard>
        ))}
      </div>
    </div>
  );
};

export default MyIdeasPage;
