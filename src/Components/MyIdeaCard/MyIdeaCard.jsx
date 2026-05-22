"use client";

import { AlertDialog, Button, Chip, toast } from "@heroui/react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MyIdeaEditModal from "../MyIdeaEditModal/MyIdeaEditModal";
import { authClient } from "@/lib/auth-client";

const MyIdeaCard = ({ myIdea }) => {
  const router = useRouter();

  const {
    _id,
    name,
    short_description,
    image,
    category,
    detailed_description,
  } = myIdea;

  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${_id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData.token}`,
        },
      },
    );
    const data = await res.json();
    console.log(data, "from detete ida");

    if (data) {
      toast.success("your idea deleted!");
      router.refresh();
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end gap-8 border border-gray-200 rounded-md p-4 group">
        <div className="flex flex-col md:flex-row gap-10 md:gap-8">
          <div className="h-75 max-w-100 w-full overflow-hidden">
            <Image
              src={image}
              alt={name}
              width={600}
              height={600}
              className="rounded-md w-full h-full aspect-square object-cover object-center transition-transform duration-400 group-hover:scale-106  ease-in-out"
            ></Image>
          </div>

          <div>
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-bold">{name}</h2>
              <Chip className="bg-[#f3f0e4]">{category}</Chip>
              <p>{short_description}</p>
              <p className="mt-4">{detailed_description}</p>

              <div className="mt-4">
                <Link href={`/ideas/${_id}`}>
                  <Button className={"rounded-md bg-[#469165]"}>
                    View Detail
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" ">
          <div className="flex gap-4">
            <MyIdeaEditModal myIdea={myIdea}></MyIdeaEditModal>

            <AlertDialog>
              <Button variant="danger" className={"rounded-md"}>
                Delete
              </Button>
              <AlertDialog.Backdrop>
                <AlertDialog.Container>
                  <AlertDialog.Dialog className="">
                    <AlertDialog.CloseTrigger />
                    <AlertDialog.Header>
                      <AlertDialog.Icon status="danger" />
                      <AlertDialog.Heading>
                        Delete project permanently?
                      </AlertDialog.Heading>
                    </AlertDialog.Header>
                    <AlertDialog.Body>
                      <p>
                        This will permanently delete <strong>{name}</strong> and
                        all of its data. This action cannot be undone.
                      </p>
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                      <Button
                        slot="close"
                        variant="tertiary"
                        className={"rounded-md"}
                      >
                        Cancel
                      </Button>
                      <Button
                        slot="close"
                        variant="danger"
                        className={"rounded-md"}
                        onClick={handleDelete}
                      >
                        Delete Idea
                      </Button>
                    </AlertDialog.Footer>
                  </AlertDialog.Dialog>
                </AlertDialog.Container>
              </AlertDialog.Backdrop>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyIdeaCard;
