"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

const RegistrationPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const route = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: userData.email,
      password: userData.password,
      name: userData.name,
      image: userData.image,
    });

    console.log(data, "from registration page");

    if (data) {
      toast.success("Register successful!");
      route.push("/");
    }

    if (error) {
      toast.danger(error.message);
    }
  };

  const handleGoogleLoin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="max-w-360 mx-auto px-3 flex items-center justify-center my-12 md:my-26">
      <div>
        <div className="text-center space-y-2">
          <h2 className="text-[#001931] dark:text-white font-bold text-[22px] md:text-3xl">
            Join the Future of Innovation
          </h2>
          <p className="max-w-120 mx-auto">
            Create your ideaVault account to share startup ideas, connect with
            creative thinkers.
          </p>
        </div>

        <div className="mt-7 lg:mt-12 border border-gray-200 p-4 md:p-6 rounded-md">
          <Form className="space-y-4 lg:space-y-6" onSubmit={onSubmit}>
            <TextField isRequired name="name" type="text">
              <Label>Name</Label>
              <Input
                placeholder="Enter your name"
                className={"rounded-md border border-gray-200 shadow-none"}
              />
            </TextField>

            <TextField isRequired name="email" type="email">
              <Label>Email</Label>
              <Input
                placeholder="Enter your email"
                className={"rounded-md border border-gray-200 shadow-none"}
              />
            </TextField>

            <TextField isRequired name="image" type="text">
              <Label>Image URL</Label>
              <Input
                placeholder="Enter your image url"
                className={"rounded-md border border-gray-200 shadow-none"}
              />
            </TextField>

            <div className="space-y-1">
              <TextField
                className={"relative"}
                isRequired
                minLength={6}
                name="password"
                type={showPassword ? "text" : "password"}
                validate={(value) => {
                  if (value.length < 6) {
                    return "Password must be at least 6 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }
                  if (!/[a-z]/.test(value)) {
                    return "Password must contain at least one lowercase letter";
                  }
                  return null;
                }}
              >
                <Label>Password</Label>
                <Input
                  placeholder="Enter your password"
                  className={"rounded-md border border-gray-200 shadow-none"}
                />
                <Description className="mt-1">
                  Must be at least 6 characters with 1 lowercase and uppercase
                </Description>
                <FieldError />

                <div
                  className="absolute top-[44%] md:top-[50%] right-2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
                </div>
              </TextField>
            </div>

            <div className="mt-4 lg:mt-7 space-y-3 lg:space-y-4">
              <Button
                type="submit"
                className={
                  "w-full rounded-md bg-[#469165] text-lg py-5 font-semibold"
                }
              >
                Register
              </Button>

              <div className="text-center font-medium text-lg">
                <p>Or</p>
              </div>

              <Button
                onClick={handleGoogleLoin}
                variant="outline"
                className={"w-full rounded-md text-lg py-5 font-semibold"}
              >
                <IoLogoGoogle className="text-2xl font-bold" />
                Login with Google
              </Button>
            </div>
          </Form>

          <div className="mt-4 text-center">
            <p>
              If you have account |{" "}
              <Link href={"/login"} className="text-[#469165] font-semibold">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
