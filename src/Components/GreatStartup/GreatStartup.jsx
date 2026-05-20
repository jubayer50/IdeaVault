import idea from "@/assets/images/idea.png";
import feedback from "@/assets/images/feedback.png";
import collaborators from "@/assets/images/collaborators.png";
import innovation from "@/assets/images/innovation.png";
import Image from "next/image";

const GreatStartup = () => {
  return (
    <div className="max-w-340 mx-auto px-3 my-30">
      <h2 className="text-[28px] md:text-[42px] text-center font-bold">
        Great Startup Ideas Deserve More Than Just Notes
      </h2>
      <p className="max-w-200 mx-auto mt-3 text-center">
        Most innovative ideas get lost in notebooks, random documents, or
        forgotten chats. ideaVault gives creators a dedicated platform to share,
        validate, and improve startup ideas.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="text-center space-y-3.5 px-6 py-8 rounded-md shadow hover:shadow-lg transition duration-300">
          <div className="flex items-center justify-center mb-5">
            <Image
              src={idea}
              alt="idea"
              width={400}
              height={400}
              className="w-20"
            ></Image>
          </div>

          <h3 className="text-xl font-semibold">Lost Startup Ideas</h3>
          <p>
            Brilliant concepts often disappear before they are fully explored or
            validated.
          </p>
        </div>

        <div className="text-center space-y-3.5 px-6 py-8 rounded-md shadow hover:shadow-lg transition duration-300">
          <div className="flex items-center justify-center mb-5">
            <Image
              src={feedback}
              alt="feedback"
              width={400}
              height={400}
              className="w-20"
            ></Image>
          </div>

          <h3 className="text-xl font-semibold">No Real Feedback</h3>
          <p>
            Ideas stay untested because there’s no active community to discuss
            and improve them.
          </p>
        </div>

        <div className="text-center space-y-3.5 px-6 py-8 rounded-md shadow hover:shadow-lg transition duration-300">
          <div className="flex items-center justify-center mb-5">
            <Image
              src={collaborators}
              alt="collaborators"
              width={400}
              height={400}
              className="w-20"
            ></Image>
          </div>

          <h3 className="text-xl font-semibold">Hard to Find Collaborators</h3>
          <p>
            Creators struggle to connect with developers, designers, and
            entrepreneurs who share similar interests.
          </p>
        </div>

        <div className="text-center space-y-3.5 px-6 py-8 rounded-md shadow hover:shadow-lg transition duration-300">
          <div className="flex items-center justify-center mb-5">
            <Image
              src={innovation}
              alt="innovation"
              width={400}
              height={400}
              className="w-20"
            ></Image>
          </div>

          <h3 className="text-xl font-semibold">
            Innovation Without Visibility
          </h3>
          <p>
            Many promising ideas never reach the right audience or gain the
            attention they deserve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GreatStartup;
