import Image from "next/image";
import React from "react";
import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeleteModal/DeleteModal";

const CommentCard = ({ comment }) => {
  return (
    <div className="rounded-md p-3 border flex items-end justify-between">
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

      <div className="flex items-end  gap-3 text-[15px]">
        <EditModal
          commentId={comment._id}
          commentMessage={comment.comment}
        ></EditModal>

        <DeleteModal
          commentId={comment._id}
          commentMessage={comment.comment}
        ></DeleteModal>
      </div>
    </div>
  );
};

export default CommentCard;
