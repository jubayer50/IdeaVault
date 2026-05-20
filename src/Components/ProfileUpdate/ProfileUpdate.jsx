"use client";

import { authClient } from "@/lib/auth-client";
import { Person, PencilToSquare } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";

const ProfileUpdate = () => {
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const onSubmit = async (e) => {
    e.preventDefault();

    const fromData = new FormData(e.currentTarget);
    const data = Object.fromEntries(fromData.entries());

    await authClient.updateUser({
      image: data.image,
      name: data.name,
    });

    router.refresh();
  };

  return (
    <div>
      <Modal>
        <Button variant="secondary" className={"rounded-md"}>
          {" "}
          <PencilToSquare></PencilToSquare>
          Update your Profile
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="rounded-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <Person className="size-5" />
                </Modal.Icon>
                <Modal.Heading>Update Profile</Modal.Heading>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <TextField
                      className="w-full"
                      name="name"
                      type="text"
                      defaultValue={user?.name}
                    >
                      <Label>Name</Label>
                      <Input
                        placeholder="Enter your name"
                        className={
                          "rounded-md shadow-none border border-gray-200"
                        }
                      />
                    </TextField>

                    <TextField className="w-full" name="image" type="text">
                      <Label>Image URL</Label>
                      <Input
                        placeholder="Enter your Image URL"
                        className={
                          "rounded-md shadow-none border border-gray-200"
                        }
                      />
                    </TextField>

                    <Modal.Footer>
                      <Button type="submit" slot="close" className={"w-full"}>
                        Update
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default ProfileUpdate;
