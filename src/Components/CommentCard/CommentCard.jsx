import Image from "next/image";
import React from "react";
import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeleteModal/DeleteModal";

const CommentCard = ({ comment }) => {
  /*
 
   {
      "_id": "6a0cb178eb55769d0d2104b6",
      "comment": "wow",
      "userid": "6a0c81de6eef0bf0a7be57d3",
      "userName": "Jubayer",
      "userImage": "https://images.unsplash.com/photo-1537511446984-935f663eb1f4",
      "idea_id": "6a0bf372df879ebdb22be335",
      "idea_name": "Smart Expense Tracker",
      "idea_image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      "idea_category": "finance",
      "comment_data": "2026-05-19T18:52:40.346Z"
  }
      
 */

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
