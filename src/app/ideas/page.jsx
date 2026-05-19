import IdeaCard from "@/Components/IdeaCard/IdeaCard";
import { getIdeas } from "@/lib/data";
import { Button, Label, ListBox, SearchField, Select } from "@heroui/react";

const IdeasPage = async () => {
  const ideas = await getIdeas();

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

        <div className="mt-5 rounded-md bg-gray-200 p-2 flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div className="flex justify-center gap-3 rounded-md bg-gray-200 p-2">
            <SearchField name="search" className={"w-62.5"}>
              <SearchField.Group className="rounded-md border shadow-none ">
                <SearchField.SearchIcon />
                <SearchField.Input placeholder="Search..." className={""} />
                <SearchField.ClearButton />
              </SearchField.Group>
            </SearchField>

            <Button className={"rounded-md bg-[#469165]"}>Search</Button>
          </div>

          <div>
            <Select
              placeholder="Select one"
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
