"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Form, TextArea, TextField, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const PostComment = ({ idea }) => {
  const router = useRouter();

  const { _id, name, image, category } = idea;

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const commentData = Object.fromEntries(formData.entries());

    commentData.userid = user?.id;
    commentData.userName = user?.name;
    commentData.userImage = user?.image;
    commentData.idea_id = _id;
    commentData.idea_name = name;
    commentData.idea_image = image;
    commentData.idea_category = category;
    commentData.comment_data = new Date();

    console.log(commentData, "from comment page");

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(commentData),
    });
    const data = await res.json();

    if (data) {
      toast.success("comment added successfully!");
      router.refresh();
    }
  };

  return (
    <div className="my-10 ">
      <h3 className="font-semibold text-xl md:text-2xl">
        Share your valuable comment:
      </h3>

      <Form className="mt-2" onSubmit={onSubmit}>
        <TextField name="comment">
          <TextArea
            placeholder="Tell us your comment..."
            className={"rounded-md shadow-none border border-gray-200"}
          />
        </TextField>

        <Button type="submit" className={"rounded-md bg-[#469165] mt-2"}>
          Post Comment
        </Button>
      </Form>
    </div>
  );
};

export default PostComment;
