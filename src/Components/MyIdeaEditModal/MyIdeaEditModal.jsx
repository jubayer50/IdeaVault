"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Form,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
  toast,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const MyIdeaEditModal = ({ myIdea }) => {
  const {
    _id,
    name,
    short_description,
    detailed_description,
    image,
    problem_statement,
    proposed_solution,
    estimated_budget,
    target_audience,
  } = myIdea;

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updataData = Object.fromEntries(formData.entries());

    if (updataData.tags) {
      updataData.tags = updataData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);
    }

    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData.token}`,
        },
        body: JSON.stringify(updataData),
      },
    );

    const data = await res.json();

    if (data) {
      toast.success("Your Idea Updated!");
      router.refresh();
    }
  };
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
      <Modal className="">
        <Button variant="outline" className={"border-[#469165] rounded-md"}>
          Edit Idea
        </Button>

        <Modal.Backdrop>
          <Modal.Container placement="">
            <Modal.Dialog className="w-full max-w-2xl rounded-md p-6">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading className="font-bold text-lg">
                  Update your Idea
                </Modal.Heading>
              </Modal.Header>
              <Modal.Body className="mt-3">
                <Surface variant="default">
                  <Form
                    className="p-3 border rounded-md space-y-5"
                    onSubmit={onSubmit}
                  >
                    <TextField
                      name="name"
                      type="text"
                      defaultValue={name}
                      isRequired
                    >
                      <Label>Idea Title</Label>
                      <Input
                        placeholder="Enter your idea title"
                        className={
                          "rounded-md shadow-none border border-gray-200"
                        }
                      />
                    </TextField>

                    <TextField
                      name="short_description"
                      defaultValue={short_description}
                    >
                      <Label>Short Description</Label>
                      <TextArea
                        placeholder="Enter short description"
                        className={
                          "rounded-md shadow-none border border-gray-200"
                        }
                      />
                    </TextField>

                    <TextField
                      name="detailed_description"
                      defaultValue={detailed_description}
                    >
                      <Label>Detailed Description</Label>
                      <TextArea
                        placeholder="Enter short description"
                        className={
                          "rounded-md shadow-none border border-gray-200"
                        }
                        rows={4}
                      />
                    </TextField>

                    <div className="flex flex-col md:flex-row gap-4">
                      <TextField
                        name="image"
                        type="text"
                        className={"flex-1"}
                        defaultValue={image}
                      >
                        <Label>Image URL</Label>
                        <Input
                          placeholder="Enter your idea title"
                          className={
                            "rounded-md shadow-none border border-gray-200 "
                          }
                        />
                      </TextField>

                      <Select
                        isRequired
                        placeholder="Select one"
                        name="category"
                        className={"flex-1"}
                      >
                        <Label>Category</Label>

                        <Select.Trigger
                          className={
                            "border border-gray-200 rounded-md shadow-none "
                          }
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
                        className={
                          "rounded-md shadow-none border border-gray-200"
                        }
                      />
                    </TextField>

                    <div className="flex flex-col md:flex-row gap-4">
                      <TextField
                        name="problem_statement"
                        className={"flex-1"}
                        defaultValue={problem_statement}
                      >
                        <Label>Problem Statement</Label>
                        <TextArea
                          placeholder="Enter problem statement"
                          className={
                            "rounded-md shadow-none border border-gray-200"
                          }
                        />
                      </TextField>

                      <TextField
                        name="proposed_solution"
                        className={"flex-1"}
                        defaultValue={proposed_solution}
                      >
                        <Label>Proposed Solution</Label>
                        <TextArea
                          placeholder="Enter proposed solution"
                          className={
                            "rounded-md shadow-none border border-gray-200"
                          }
                        />
                      </TextField>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                      <TextField
                        defaultValue={estimated_budget}
                        name="estimated_budget"
                        type="text"
                        className={"flex-1"}
                      >
                        <Label>Estimated Budget (optional) </Label>
                        <Input
                          placeholder="Enter Estimated Budget"
                          className={
                            "rounded-md shadow-none border border-gray-200"
                          }
                        />
                      </TextField>

                      <TextField
                        defaultValue={target_audience}
                        name="target_audience"
                        type="text"
                        className={"flex-1"}
                      >
                        <Label>Target Audience</Label>
                        <Input
                          placeholder="Enter your target audience"
                          className={
                            "rounded-md shadow-none border border-gray-200"
                          }
                        />
                      </TextField>
                    </div>

                    <div className="mt-5">
                      <Button
                        type="submit"
                        slot={"close"}
                        className={"w-full rounded-md"}
                      >
                        <Check />
                        Update
                      </Button>
                    </div>
                  </Form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default MyIdeaEditModal;
