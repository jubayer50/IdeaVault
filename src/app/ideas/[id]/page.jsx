import { getIdeaById } from "@/lib/data";

const IdeaDetailPage = async ({ params }) => {
  const { id } = await params;

  const idea = await getIdeaById(id);

  console.log(idea, "from dynamic page");

  return (
    <div className="max-w-340 mx-auto px-3 my-12 md:my-26">
      <h2 className="font-bold">idea detail page</h2>
    </div>
  );
};

export default IdeaDetailPage;
