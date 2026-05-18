"use client";

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
import React from "react";
import { IoLogoGoogle } from "react-icons/io";

const RegistrationPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
  };

  return (
    <div className="max-w-360 mx-auto px-3 flex items-center justify-center my-12 md:my-26">
      <div>
        <div className="text-center space-y-2">
          <h2 className="text-[#001931] font-bold text-[22px] md:text-3xl">
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
                isRequired
                minLength={6}
                name="password"
                type="password"
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
              </TextField>
            </div>

            <div className="mt-4 lg:mt-7 space-y-3 lg:space-y-4">
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

          <div className="mt-4 text-center">
            <p>
              If you have account |{" "}
              <Link href={"/login"} className="text-blue-600 font-semibold">
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
