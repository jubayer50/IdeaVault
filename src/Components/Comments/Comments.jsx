import { getComments } from "@/lib/data";

import CommentCard from "../CommentCard/CommentCard";

const Comments = async ({ ideaId }) => {
  const comments = await getComments();

  const targetComments = comments.filter(
    (comment) => comment.idea_id === ideaId,
  );

  return (
    <div className="mt-8 mb-18">
      <h2 className="text-lg font-semibold">Comments:</h2>

      <div className="mt-3 space-y-4">
        {targetComments.map((comment, i) => (
          <CommentCard key={i} comment={comment}></CommentCard>
        ))}
      </div>
    </div>
  );
};

export default Comments;
