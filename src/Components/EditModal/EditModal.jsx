"use client";
import { Button, Form, Input, Modal, TextField, toast } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditModal = ({ commentId, commentMessage }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updataFormData = Object.fromEntries(formData.entries());

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${commentId}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updataFormData),
      },
    );
    const data = await res.json();

    if (data) {
      toast.success("successfully updated comment!");
      router.refresh();
    }
  };

  return (
    <div>
      <Modal isOpen={open} onOpenChange={setOpen}>
        <Button
          onClick={() => setOpen(true)}
          className={
            "bg-transparent p-0 m-0 border-none text-[14px] text-black font-normal"
          }
        >
          Edit
        </Button>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="rounded-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading className="text[14px] md:text-[17px]">
                  Edit comment
                </Modal.Heading>
              </Modal.Header>
              <Modal.Body>
                <Form
                  className="mt-2 flex items-end flex-col"
                  onSubmit={onSubmit}
                >
                  <TextField
                    isRequired
                    name="comment"
                    className={"w-full px-1"}
                    defaultValue={commentMessage}
                  >
                    <Input
                      type="text"
                      className={
                        "rounded-md shadow-none border border-gray-200"
                      }
                    />
                  </TextField>

                  <Button
                    slot={"close"}
                    type="submit"
                    className={"rounded-md bg-[#469165] mt-2"}
                  >
                    Update Comment
                  </Button>
                </Form>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditModal;
