import CommentsCard from "@/Components/CommentsCard/CommentsCard";
import PostComment from "@/Components/PostComment/PostComment";
import { getIdeaById } from "@/lib/data";
import { Card, Chip } from "@heroui/react";
import Image from "next/image";

const IdeaDetailPage = async ({ params }) => {
  const { id } = await params;

  const idea = await getIdeaById(id);

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
            <div className="text-[#469165]">
              <Chip className="bg-[#f3f0e4]">Category: {category}</Chip>
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

      <CommentsCard ideaId={_id}></CommentsCard>
    </div>
  );
};

export default IdeaDetailPage;

/**
 {
    "_id": "6a0bf372df879ebdb22be335",
    "name": "Smart Expense Tracker",
    "image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    "category": "finance",
    "tags": "finance, budgeting, savings",
    "detailed_description": "Users can track spending, categorize expenses, and receive monthly financial reports with AI-based saving tips.",
    "estimated_budget": "10,000",
    "problem_statement": "Many people fail to manage their personal finances properly.",
    "proposed_solution": "Automate expense tracking and provide financial insights.",
    "short_description": "An app that helps users manage expenses and savings efficiently.",
    "target_audience": "Students and young professionals"
}
 */
