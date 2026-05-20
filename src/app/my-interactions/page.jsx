import { auth } from "@/lib/auth";
import { getComments } from "@/lib/data";
import { headers } from "next/headers";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

const MyInteractionsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { id } = session?.user;

  // get token
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const comments = await getComments(token);

  const userActivities = comments.filter((comment) => comment.userid === id);

  return (
    <div className="max-w-340 mx-auto px-3 my-8 md:my-16">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">
          Your Ideas & Interactions
        </h2>
        <p className="mt-1.5">
          Track how the community is engaging with your startup ideas—view
          comments, feedback, and discussions all in one place to refine and
          improve your concepts.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {userActivities.map((activity, i) => (
          <div key={i} className="border p-3 rounded-md">
            <div>
              <p className="text-lg">
                <strong>Idea title:</strong> {activity?.idea_name}
              </p>
              <Link href={`ideas/${activity?.idea_id}`}>
                <small className="text-blue-600 flex items-center gap-1">
                  {" "}
                  <IoIosArrowRoundBack className="text-xl" /> back to idea
                  details
                </small>
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
