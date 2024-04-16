import React from "react";
import { FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const LikeProfile = ({ userProfile }) => {
  const { authUser } = useAuthContext();
  let isOwnProfile = authUser?.username === userProfile.login;
  const handleLikeProfile = async () => {
    try {
      const response = await fetch(`/api/users/like/${userProfile.login}`, {
        method: "POST",
        credentials: "include",
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  if (isOwnProfile) return null;
  return (
    <button
      className="flex items-center gap-2 bg-glass font-medium w-full text-sm p-2 rounded-lg cursor-pointer border border-blue-400"
      onClick={handleLikeProfile}
    >
      <FaHeart size={16} /> Like Profile
    </button>
  );
};

export default LikeProfile;
