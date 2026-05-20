import { auth } from "@/lib/auth";
import { getComments } from "@/lib/data";
import { headers } from "next/headers";
import Link from "next/link";

const MyInteractionsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { id } = session?.user;
  console.log(id, "id");

  const comments = await getComments();

  const userActivities = comments.filter((comment) => comment.userid === id);

  //6a0c81de6eef0bf0a7be57d3
  /**
   {
    "_id": "6a0caa2ceb55769d0d2104b4",
    "comment": "nice",
    "userid": "6a0c81de6eef0bf0a7be57d3",
    "userName": "Jubayer",
    "userImage": "https://images.unsplash.com/photo-1537511446984-935f663eb1f4",
    "idea_id": "6a0bf372df879ebdb22be335",
    "idea_name": "Smart Expense Tracker",
    "idea_image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    "idea_category": "finance",
    "comment_data": "2026-05-19T18:21:32.646Z"
}
   */

  return (
    <div className="max-w-340 mx-auto px-3 my-8 md:my-16">
      <div>
        <h2 className="text-3xl font-bold">Your Ideas & Interactions</h2>
        <p className="mt-1">
          Track how the community is engaging with your startup ideas—view
          comments, feedback, and discussions all in one place to refine and
          improve your concepts.
        </p>
      </div>

      <div className="mt-5 space-y-4">
        {userActivities.map((activity, i) => (
          <div key={i} className="border p-3 rounded-md">
            <div>
              <p className="text-lg">
                <strong>Idea title:</strong> {activity?.idea_name}
              </p>
              <Link href={`ideas/${activity?.idea_id}`}>
                <small className="text-blue-600">back to idea details</small>
              </Link>
            </div>
            <div className="mt-3 space-y-.5">
              <p className="font-bold">Comment:</p>
              <p>{activity?.comment}</p>
              <small>
                {new Date(activity?.comment_data).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyInteractionsPage;
