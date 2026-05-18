import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-26 pb-10 bg-[#001931]">
      <div className="max-w-340 mx-auto px-3">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div>
            <Link href={"/"}>
              <p className="text-3xl md:text-4xl font-bold text-white">
                Idea<span className="text-[#469165]">Vault</span>{" "}
              </p>
            </Link>
          </div>

          <div>
            <p className="text-white text-xl">Platform links</p>

            <div className="flex flex-col gap-2 mt-3">
              <Link
                href={"/ideas"}
                className="text-[#ffffff80] hover:text-white transition duration-150"
              >
                Ideas
              </Link>
              <Link
                href={"/add-idea"}
                className="text-[#ffffff80] hover:text-white transition duration-150"
              >
                Add Ideas
              </Link>
              <Link
                href={"/my-ideas"}
                className="text-[#ffffff80] hover:text-white transition duration-150"
              >
                My Ideas{" "}
              </Link>
              <Link
                href={"/my-interactions"}
                className="text-[#ffffff80] hover:text-white transition duration-150"
              >
                My Interactions
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xl font-medium text-white">Social links:</p>

            <div className="flex items-center gap-3 mt-2">
              <div className="w-10 h-10 rounded-full p-1 bg-white flex items-center justify-center">
                <FaXTwitter className="" />
              </div>
              <div className="w-10 h-10 rounded-full p-1 bg-white flex items-center justify-center">
                <FaLinkedinIn className="" />
              </div>
              <div className="w-10 h-10 rounded-full p-1 bg-white flex items-center justify-center">
                <FaFacebookF className="" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-[#E5E7EB] mt-10">
          <p className="text-white text-center">
            © 2026 Personal Idea Vault. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
