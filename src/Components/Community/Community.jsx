import community from "@/assets/images/Community.png";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

const Community = () => {
  return (
    <div className="max-w-360 mx-auto px-3 my-26 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
      <div className="flex rounded-md p-15 justify-center bg-[#fbfbfb]">
        <Image
          src={community}
          alt="Community"
          width={600}
          height={600}
          className="w-90"
        ></Image>
      </div>

      <div className="rounded-md max-w-175 space-y-5">
        <h2 className="text-3xl md:text-4xl font-bold">
          A Community-Driven Space Where Startup Ideas Grow
        </h2>

        <p className="text-[15px]">
          IdeaVault helps innovators transform rough concepts into meaningful
          startup opportunities. Share your ideas, explore trending innovations,
          engage in discussions, and refine concepts together with a creative
          community.
        </p>

        <div className="space-y-2.5 text-[15px] mt-9">
          <p className="flex items-center gap-2">
            <FaCheck className="text-[#469165] font-bold text-xl" /> Share
            startup ideas with the community instantly
          </p>

          <p className="flex items-center gap-2">
            <FaCheck className="text-[#469165] font-bold text-xl" /> Build and
            refine ideas through meaningful discussions
          </p>

          <p className="flex items-center gap-2">
            <FaCheck className="text-[#469165] font-bold text-xl" /> Connect
            with creative thinkers and future collaborators
          </p>

          <p className="flex items-center gap-2">
            <FaCheck className="text-[#469165] font-bold text-xl" /> Receive
            comments, feedback, and validation from others
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
