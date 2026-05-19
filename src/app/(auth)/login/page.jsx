"use client";

import Image from "next/image";
import loginImage from "@/assets/images/ideaLogin.png";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { IoLogoGoogle } from "react-icons/io";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const loginData = Object.fromEntries(formData.entries());
  };

  return (
    <div className="px-3 my-20 flex items-center justify-center max-w-250 mx-auto">
      <div className="rounded-md border border-gray-200 flex gap-4 overflow-hidden">
        <div className="flex-1 p-4 md:p-8">
          <div className="space-y-1">
            <h2 className="text-[#001931] font-bold text-[22px] md:text-3xl">
              Welcome Back to Idea<span className="text-[#469165]">Vault</span>
            </h2>
            <p className="text-[16px] text-[#469165]">
              Join a growing community of entrepreneurs.
            </p>
          </div>

          <div className="mt-4 lg:mt-12">
            <Form className="space-y-3 lg:space-y-6" onSubmit={onSubmit}>
              <TextField isRequired name="email" type="email">
                <Label>Email</Label>
                <Input
                  placeholder="Enter your email"
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
                    className={"rounded-md border border-gray-200 shadow-none "}
                  />
                  <Description className="mt-1">
                    Must be at least 6 characters with 1 lowercase and uppercase
                  </Description>
                  <FieldError />

                  <div
                    className="absolute top-[44%] lg:top-[50%] right-2 -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
                  </div>
                </TextField>

                <Link href={"/forget-password"} className="text-blue-600">
                  Forget Password
                </Link>
              </div>

              <div className="mt-3 lg:mt-7 space-y-2 lg:space-y-5">
                <Button
                  type="submit"
                  className={
                    "w-full rounded-md bg-[#469165] text-lg py-5 font-semibold"
                  }
                >
                  Log In
                </Button>

                <div className="text-center font-medium text-lg">
                  <p>Or</p>
                </div>

                <Button
                  variant="outline"
                  className={"w-full rounded-md text-lg py-5 font-semibold"}
                >
                  <IoLogoGoogle className="text-2xl font-bold" />
                  Login with Google
                </Button>
              </div>
            </Form>

            <div className="text-center mt-3 lg:mt-4">
              <p>
                If you don't have account |{" "}
                <Link
                  href={"/registration"}
                  className="text-blue-600 font-semibold"
                >
                  Registration
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:block flex-1">
          <div className="bg-[#F7F6F2] flex items-center justify-center p-20 ">
            <Image
              src={loginImage}
              alt="idea illustration"
              width={600}
              height={600}
              className="w-100"
            ></Image>
          </div>

          <div className="py-14 px-8 bg-[#46916520] flex items-center justify-center text-center ">
            <div className="space-y-4">
              <h2 className="font-bold text-2xl">
                Turn Ideas Into Real Startups
              </h2>
              <p className="text-[15px]">
                Discover innovative startup concepts shared by creative minds
                around the world. Explore, discuss, and validate ideas that
                could become the next big thing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
