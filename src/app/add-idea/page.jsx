"use client";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  Select,
  Form,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
} from "@heroui/react";

const AddIdeaPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const ideaData = Object.fromEntries(formData.entries());
  };

  return (
    <div className="px-3 my-12 md:my-20">
      <h2 className="text-center text-3xl md:text-4xl font-semibold">
        Add your startup Idea
      </h2>
      <p className="text-center max-w-150 mx-auto mt-3">
        Add your innovative idea, start meaningful discussions, and discover how
        the community can help refine your vision.
      </p>

      <div className="mt-8 md:mt-10 flex items-center justify-center">
        <div className="max-w-200 w-full mx-auto">
          <Form className="p-5 border rounded-md space-y-5" onSubmit={onSubmit}>
            <TextField isRequired name="name" type="text">
              <Label>Idea Title</Label>
              <Input
                placeholder="Enter your idea title"
                className={"rounded-md shadow-none border border-gray-200"}
              />
            </TextField>

            <TextField isRequired name="name" type="text">
              <Label>Idea Title</Label>
              <Input
                placeholder="Enter your idea title"
                className={"rounded-md shadow-none border border-gray-200"}
              />
            </TextField>

            <TextField isRequired name="short-description">
              <Label>Short Description</Label>
              <TextArea
                placeholder="Enter short description"
                className={"rounded-md shadow-none border border-gray-200"}
              />
            </TextField>

            <TextField isRequired name="detailed-description">
              <Label>Detailed Description</Label>
              <TextArea
                placeholder="Enter short description"
                className={"rounded-md shadow-none border border-gray-200"}
                rows={4}
              />
            </TextField>

            <div className="flex flex-col md:flex-row gap-4">
              <TextField
                isRequired
                name="image"
                type="text"
                className={"flex-1"}
              >
                <Label>Image URL</Label>
                <Input
                  placeholder="Enter your idea title"
                  className={"rounded-md shadow-none border border-gray-200 "}
                />
              </TextField>

              <Select
                placeholder="Select one"
                name="category"
                className={"flex-1"}
                isRequired
              >
                <Label>Category</Label>

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

            <TextField name="tags" type="text">
              <Label>Tags (optional) </Label>
              <Input
                placeholder="Tags"
                className={"rounded-md shadow-none border border-gray-200"}
              />
            </TextField>

            <div className="flex flex-col md:flex-row gap-4">
              <TextField name="problem-statement" className={"flex-1"}>
                <Label>Problem Statement</Label>
                <TextArea
                  placeholder="Enter problem statement"
                  className={"rounded-md shadow-none border border-gray-200"}
                />
              </TextField>

              <TextField name="proposed-solution" className={"flex-1"}>
                <Label>Proposed Solution</Label>
                <TextArea
                  placeholder="Enter proposed solution"
                  className={"rounded-md shadow-none border border-gray-200"}
                />
              </TextField>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <TextField
                name="estimated-budget"
                type="text"
                className={"flex-1"}
              >
                <Label>Estimated Budget (optional) </Label>
                <Input
                  placeholder="Enter Estimated Budget"
                  className={"rounded-md shadow-none border border-gray-200"}
                />
              </TextField>

              <TextField
                name="target-audience"
                type="text"
                className={"flex-1"}
              >
                <Label>Target Audience</Label>
                <Input
                  placeholder="Enter your target audience"
                  className={"rounded-md shadow-none border border-gray-200"}
                />
              </TextField>
            </div>

            <div className="mt-5">
              <Button type="submit" className={"w-full rounded-md"}>
                <Check />
                Add Idea
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddIdeaPage;
