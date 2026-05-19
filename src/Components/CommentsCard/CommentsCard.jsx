import { getComments } from "@/lib/data";
import Image from "next/image";

const CommentsCard = async ({ ideaId }) => {
  const comments = await getComments();

  const targetComments = comments.filter(
    (comment) => comment.idea_id === ideaId,
  );

  return (
    <div className="mt-8 mb-18">
      <h2 className="text-lg font-semibold">Comments:</h2>

      <div className="mt-3 space-y-4">
        {targetComments.map((comment, i) => (
          <div
            key={i}
            className="rounded-md p-3 border flex items-end justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-18 h-18 rounded-full">
                <Image
                  src={comment?.userImage}
                  alt={comment?.userName}
                  width={200}
                  height={200}
                  className="object-cover aspect-square object-center w-full h-full rounded-full"
                ></Image>
              </div>

              <div>
                <p>{comment?.userName}</p>
                <p className="text-[15px]">{comment?.comment}</p>
                <small>
                  {new Date(comment?.comment_data).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </small>
              </div>
            </div>

            <div className="flex gap-3 text-[15px]">
              <p>Edit</p>
              <p className="text-red-600">Delete</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsCard;
