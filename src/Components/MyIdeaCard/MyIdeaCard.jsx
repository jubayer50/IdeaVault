import { Button, Chip } from "@heroui/react";
import Image from "next/image";

const MyIdeaCard = ({ myIdea }) => {
  const { name, short_description, image, category, detailed_description } =
    myIdea;
  /**
 "_id": "6a0d72e79d57d7ecb6c82ec3",
"name": "Smart Budget Manager",
"short_description": "A smart app to manage personal finance and savings efficiently.",
"detailed_description": "An AI-powered finance app that tracks income, expenses, savings goals, and provides smart budgeting advice.",
"image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
"category": "finance",
"tags": [
"budget",
"savings",
"finance",
"expense tracking"
],
"problem_statement": "Most people fail to manage monthly expenses effectively.",
"proposed_solution": "Automated expense tracking with AI-based saving recommendations.",
"estimated_budget": "12000",
"target_audience": "Students, professionals, and small business owners",
"userid": "6a0c81de6eef0bf0a7be57d3"
   */
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end gap-8 border rounded-md p-4">
        <div className="flex flex-col md:flex-row gap-10 md:gap-8">
          <div className="h-75 max-w-100 w-full">
            <Image
              src={image}
              alt={name}
              width={600}
              height={600}
              className="rounded-md w-full h-full aspect-square object-cover object-center"
            ></Image>
          </div>

          <div>
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-bold">{name}</h2>
              <Chip className="bg-[#f3f0e4]">{category}</Chip>
              <p>{short_description}</p>
              <p className="mt-4">{detailed_description}</p>
            </div>
          </div>
        </div>

        <div className=" ">
          <div className="flex gap-6">
            <Button variant="outline" className={"border-[#469165] rounded-md"}>
              Edit
            </Button>
            <Button variant="danger" className={"rounded-md"}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyIdeaCard;
