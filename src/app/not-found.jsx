import { Button } from "@heroui/react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F6F2]">
      <div className=" text-center">
        <h2 className="text-5xl font-bold">404</h2>
        <div className="mt-8 space-y-4">
          <p className="max-w-65 mx-auto text-center">
            This page your are looking for does not exist.
          </p>
          <Link href={"/"}>
            <Button variant="outline" className={"border-[#469165]"}>
              Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
