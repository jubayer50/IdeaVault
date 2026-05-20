"use client";

import { AlertDialog, Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const DeleteModal = ({ commentId, commentMessage }) => {
  const router = useRouter();

  const deleteHandler = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${commentId}`,
      { method: "DELETE", headers: { "content-type": "application/json" } },
    );
    const data = await res.json();

    console.log(data, "from delete page comment");
    if (data) {
      toast.success("Comment deleted successfully!");
      router.refresh();
    }
  };

  return (
    <div>
      <AlertDialog>
        <Button
          variant="danger"
          className={
            "rounded-md text-[14px] bg-transparent m-0 p-0 font-normal text-red-600"
          }
        >
          Delete
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete Comment permanently <strong>{commentMessage}</strong>?
                </AlertDialog.Heading>
              </AlertDialog.Header>

              <AlertDialog.Footer>
                <Button
                  slot="close"
                  variant="tertiary"
                  className={"rounded-md"}
                >
                  Cancel
                </Button>
                <Button
                  onClick={deleteHandler}
                  slot="close"
                  variant="danger"
                  className={"rounded-md"}
                >
                  Delete Comment
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteModal;
