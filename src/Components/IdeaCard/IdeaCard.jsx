import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IdeaCard = ({ idea }) => {
  const { _id, name, short_description, image, category, tags } = idea;
  return (
    <div>
      <Card className="border border-gray-200 rounded-md p-3 h-full flex flex-col group">
        <div className="flex flex-col h-full">
          <div className="h-70 overflow-hidden">
            <Image
              src={image}
              alt={name}
              width={800}
              height={800}
              className="object-cover aspect-square rounded-md h-full transition-transform duration-400 group-hover:scale-106 ease-in-out"
            ></Image>
          </div>

          <div className="flex flex-col flex-1 mt-4 space-y-4">
            <div className="text-[#469165]">
              <Chip className="bg-[#f3f0e4]">Category: {category}</Chip>
            </div>

            <Card.Header className="flex-1 space-y-4">
              <Card.Title className="text-xl font-semibold">{name}</Card.Title>

              <Card.Description className="">
                {short_description}
              </Card.Description>
            </Card.Header>

            <Card.Footer className="">
              <Link href={`/ideas/${_id}`} className="w-full">
                <Button className="w-full rounded-md bg-[#469165] ">
                  View Details
                </Button>
              </Link>
            </Card.Footer>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default IdeaCard;
