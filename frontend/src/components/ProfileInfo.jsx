import React from "react";
import { FaEye } from "react-icons/fa";
import { TfiThought } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { RiUserFollowLine } from "react-icons/ri";
import { RiGitRepositoryFill } from "react-icons/ri";
import { formatMemberSince } from "../utils/functions";
import LikeProfile from "./LikeProfile";

const ProfileInfo = ({ userProfile }) => {
  // const userProfile = {
  //   avatar_url:
  //     "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
  //   bio: "👨🏻‍💻👨🏻‍💻👨🏻‍💻",
  //   email: "johndoe@gmail.com",
  //   followers: 100,
  //   following: 200,
  //   html_url: "https://github.com/burakorkmez",
  //   location: "Somewhere, Earth",
  //   name: "John Doe",
  //   public_gists: 100,
  //   public_repos: 100,
  //   twitter_username: "johndoe",
  //   login: "johndoe",
  // };

  const memberSince = formatMemberSince(userProfile?.created_at);
  return (
    <div className="flex flex-col gap-2 lg:w-1/3 md:w-full lg:sticky md:top-10">
      <div className="rounded-lg bg-glass p-4">
        <div className="flex gap-3 items-center">
          <a href={userProfile?.html_url} target="_blank" rel="noreferrer">
            <img
              src={userProfile?.avatar_url}
              className="h-24 w-24 mb-2 rounded-md"
              alt=""
            />
          </a>
          <div className="flex gap-2 items-center flex-col">
            <LikeProfile userProfile={userProfile} />
            <a
              href={userProfile?.html_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-glass font-medium w-full text-sm p-2 rounded-lg cursor-pointer border border-blue-400"
            >
              <FaEye />
              View On Github
            </a>
          </div>
        </div>
        {userProfile?.bio ? (
          <div className="flex items-center gap-2">
            <TfiThought />
            <p>{userProfile?.bio.substring(0, 60)}...</p>
          </div>
        ) : null}
        {userProfile?.location ? (
          <div className="flex items-center gap-2">
            <IoLocationOutline />
            <p>{userProfile?.location}</p>
          </div>
        ) : null}
        {userProfile?.twitter_username ? (
          <a
            src={`https://twitter.com/${userProfile.twitter_username}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 cursor-pointer hover:text-sky-500"
          >
            <FaXTwitter />
            <p>{userProfile?.twitter_username}</p>
          </a>
        ) : null}
        <div className="my-2">
          <p className="text-gray-600 font-bold text-sm">Member since</p>
          <p>{memberSince}</p>
        </div>
        <div className="my-2">
          <p className="text-gray-600 font-bold text-sm">Full Name</p>
          <p>{userProfile?.name}</p>
        </div>
        <div className="my-2">
          <p className="text-gray-600 font-bold text-sm">Username</p>
          <p>{userProfile?.login}</p>
        </div>
        {userProfile?.email && (
          <div className="my-2">
            <p className="text-gray-600 font-bold text-sm">E-mail Address</p>
            <p>{userProfile?.email}</p>
          </div>
        )}
      </div>
      <div className="flex flex-wrap mx-4 gap-2">
        {/* Follower Count */}
        <div className="flex flex-1 items-center gap-2 bg-glass rounded-lg p-2  min-w-24">
          <RiUserFollowLine className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Followers: {userProfile?.followers}</p>
        </div>
        {/* Following Count */}
        <div className="flex flex-1 items-center gap-2 bg-glass rounded-lg p-2  min-w-24">
          <RiUserFollowLine className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Following: {userProfile?.following}</p>
        </div>
        {/* Number of public repos */}
        <div className="flex flex-1 items-center gap-2 bg-glass rounded-lg p-2  min-w-24">
          <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Following: {userProfile?.public_repos}</p>
        </div>
        {/* Number of public gist */}
        <div className="flex flex-1 items-center gap-2 bg-glass rounded-lg p-2  min-w-24">
          <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Following: {userProfile?.public_gists}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
