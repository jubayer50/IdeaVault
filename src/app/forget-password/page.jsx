import { Button, Form, Input, Label, TextField } from "@heroui/react";

export const metadata = {
  title: "IdeaVault | forget-password",
  description:
    "IdeaVault is a web-based platform where users can share innovative startup ideas,explore ideas posted by others, and engage through comments, and discussions.",
};

const ForgetPasswordPage = () => {
  return (
    <div className="max-w-340 mx-auto my-12 md:my-42 px-3 flex items-center justify-center">
      <div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold ">Forgot password</h2>
          <p>Please enter your email to reset the password</p>
        </div>

        <div className="mt-6">
          <Form className="">
            <TextField isRequired name="email" type="email">
              <Label>Email</Label>
              <Input
                placeholder="Enter your email"
                className={"rounded-md border border-gray-200 shadow-none"}
              />
            </TextField>

            <div className="mt-4 lg:mt-7 space-y-3 lg:space-y-5">
              <Button
                type="submit"
                className={"w-full rounded-md bg-[#469165] text-[16px] py-4"}
              >
                Reset Password
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
