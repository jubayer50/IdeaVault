import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FiPhoneOutgoing } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="pt-26 pb-10 bg-[#001931] dark:bg-black">
      <div className="max-w-340 mx-auto px-3">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div>
            <Link href={"/"}>
              <p className="text-3xl md:text-4xl font-bold text-white">
                Idea<span className="text-[#469165]">Vault</span>{" "}
              </p>
            </Link>

            <div className="mt-5 max-w-55 text-[#ffffff80]">
              <h3 className="font-semibold text-xl">Address:</h3>
              <p className="mt-2">
                <strong>IdeaVault HQ </strong> 128 Innovation Avenue Suite 405
                San Francisco, CA 94107 United States
              </p>
            </div>
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
            <p className="text-white text-xl">Contacts info</p>

            <div className="flex flex-col gap-2 mt-3 text-[#ffffff80]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white">
                  <FiPhoneOutgoing className="text-[#469165] text-xl font-medium" />
                </div>
                <div>
                  <p className="font-semibold">Phone:</p>
                  <p>+1 (555) 287-9412</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white">
                  <MdOutlineEmail className="text-[#469165] text-xl font-medium" />
                </div>
                <div>
                  <p className="font-semibold">Email:</p>
                  <p>support@ideavault.io</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white">
                  <CgWebsite className="text-[#469165] text-xl font-medium" />
                </div>
                <div>
                  <p className="font-semibold">Website:</p>
                  <p>www.ideavault.io</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xl font-medium text-white">Social links:</p>

            <div className="flex items-center gap-3 mt-2">
              <div className="w-9 h-9 rounded-full p-1 bg-white flex items-center justify-center">
                <FaXTwitter className="text-[#469165]" />
              </div>
              <div className="w-9 h-9 rounded-full p-1 bg-white flex items-center justify-center">
                <FaLinkedinIn className="text-[#469165]" />
              </div>
              <div className="w-9 h-9 rounded-full p-1 bg-white flex items-center justify-center">
                <FaFacebookF className="text-[#469165]" />
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
