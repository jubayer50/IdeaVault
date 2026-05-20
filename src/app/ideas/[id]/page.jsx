import Comments from "@/Components/Comments/Comments";
import PostComment from "@/Components/PostComment/PostComment";
import { auth } from "@/lib/auth";
import { getIdeaById } from "@/lib/data";
import { Card, Chip } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";

// generate metadata
export async function generateMetadata({ params }) {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea/${id}`);
  const data = await res.json();

  return {
    title: data.name,
    description: data.short_description,
  };
}

const IdeaDetailPage = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const idea = await getIdeaById(id, token);

  const {
    _id,
    name,
    image,
    category,
    tags,
    detailed_description,
    estimated_budget,
    problem_statement,
    target_audience,
    short_description,
    proposed_solution,
  } = idea;

  return (
    <div className="max-w-340 mx-auto px-3 my-12">
      <Card className="border border-gray-200 rounded-md p-3 h-full flex flex-col group">
        <div className="flex flex-col h-full">
          <div className="h-130 overflow-hidden">
            <Image
              src={image}
              alt={name}
              width={1200}
              height={1200}
              className="object-cover aspect-square rounded-md h-full w-full transition-transform duration-400 group-hover:scale-106  ease-in-out"
            ></Image>
          </div>

          <div className="flex flex-col flex-1 mt-4 space-y-4">
            <div className="">
              <Chip className="bg-[#f3f0e4] text-[#469165]">
                Category: {category}
              </Chip>
            </div>

            <Card.Header className="flex-1 space-y-4">
              <div className="space-y-1">
                <Card.Title className="text-2xl md:text-3xl font-semibold mb-6">
                  {name}
                </Card.Title>

                <p className="">
                  <span className="font-bold">Detailed Description:</span>{" "}
                  {short_description}
                </p>

                <p className="">
                  <span className="font-bold">Detailed Description:</span>{" "}
                  {detailed_description}
                </p>
              </div>

              <div className="mt-4">
                <p className="text-xl font-semibold"> Problem and Solution:</p>

                <div className="space-y-1 mt-2">
                  <p className="">
                    <span className="font-bold">Problem statement:</span>{" "}
                    {problem_statement}
                  </p>

                  <p className="">
                    <span className="font-bold">Proposed solution:</span>{" "}
                    {proposed_solution}
                  </p>
                </div>

                <div className="mt-6">
                  <p>
                    <span className="font-bold">Target Audience:</span>{" "}
                    {target_audience}
                  </p>
                </div>
              </div>

              <div className="mt-3">
                <p className="text-xl">
                  <span className="font-semibold">Estimated Budget:</span> $
                  {estimated_budget}
                </p>
              </div>
            </Card.Header>
          </div>
        </div>
      </Card>

      <PostComment idea={idea}></PostComment>

      <Comments ideaId={_id}></Comments>
    </div>
  );
};

export default IdeaDetailPage;
