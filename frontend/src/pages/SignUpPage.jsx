import React from "react";
import { FaGithub, FaUnlockAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto py-8 px-6 h-screen lg:py-0">
        <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-glass">
          <div className="py-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold md:text-2xl text-center">
              Create Account
            </h1>
            <button
              type="button"
              className="flex items-center justify-center text-center w-full bg-[#24292f] gap-2 p-2 rounded-lg font-medium hover:bg-[#24292f]/90 focus:ring-4 focus:ring-[#24292f]/50"
            >
              <FaGithub className="w-5 h-5" />
              Sign Up with Github
            </button>
            <p className="text-gray-300">
              by signing up, you will unlock all the features of the app.
              <span>
                <FaUnlockAlt className="h-4 w-4 m-2 inline" />
              </span>
            </p>
            <p className="text-sm font-light text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:underline text-primary-600"
              >
                login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
