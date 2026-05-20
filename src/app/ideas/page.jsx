import IdeaCard from "@/Components/IdeaCard/IdeaCard";
import SearchBar from "@/Components/SearchBar/SearchBar";
import { getIdeas } from "@/lib/data";
import { Button, ListBox, SearchField, Select } from "@heroui/react";

export const metadata = {
  title: "IdeaVault | ideas",
  description:
    "IdeaVault is a web-based platform where users can share innovative startup ideas,explore ideas posted by others, and engage through comments, and discussions.",
};

const IdeasPage = async ({ searchParams }) => {
  const { search } = await searchParams;

  console.log(search, "from idea fetch");

  const ideas = await getIdeas(search || "");

  return (
    <div className="max-w-340 mx-auto px-3 my-10 md:mt-12 md:mb-20">
      <div>
        <div className="space-y-2">
          {" "}
          <h2 className="font-bold text-3xl md:text-4xl">
            Explore Innovative Ideas
          </h2>
          <p>
            Discover, share, and get inspired by startup ideas from creators
            around the world.
          </p>
        </div>

        <div className="mt-8 rounded-md bg-gray-200 px-2 py-1 flex flex-col md:flex-row md:items-center justify-between gap-2">
          <SearchBar></SearchBar>

          <div>
            <Select
              placeholder="Filter by Category"
              name="category"
              className={"flex-1"}
            >
              <Select.Trigger
                className={"border border-gray-200 rounded-md shadow-none "}
              >
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover className={"rounded-md shadow-md"}>
                <ListBox>
                  <ListBox.Item
                    id="technology"
                    textValue="Technology"
                    className="hover:rounded-md"
                  >
                    Technology
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item
                    id="e-commerce"
                    textValue="E-commerce"
                    className="hover:rounded-md"
                  >
                    E-commerce
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item
                    id="education"
                    textValue="Education"
                    className="hover:rounded-md"
                  >
                    Education
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item
                    id="health"
                    textValue="Health"
                    className="hover:rounded-md"
                  >
                    Health
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item
                    id="finance"
                    textValue="Finance"
                    className="hover:rounded-md"
                  >
                    Finance
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>
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
