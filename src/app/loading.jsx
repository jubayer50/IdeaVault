import { Spinner } from "@heroui/react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <Spinner className="text-[#469165]" />
    </div>
  );
};

export default LoadingPage;
