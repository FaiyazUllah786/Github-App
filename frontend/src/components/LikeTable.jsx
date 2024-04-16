import React from "react";
import { formatDate } from "../utils/functions";
import { FaHeart } from "react-icons/fa";

const LikeTable = ({ user, idx }) => {
  return (
    <tr className="bg-glass">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <span>{idx + 1}</span>
        </div>
      </td>
      <th
        scope="row"
        className="flex items-center px-6 py-4 whitespace-nowrap "
      >
        <img
          className="w-10 h-10 rounded-full"
          src={user.avatarUrl}
          alt="User Avatar"
        />
        <div className="ps-3">
          <div className="text-base font-semibold">{user.username}</div>
        </div>
      </th>
      <td className="px-6 py-4">{formatDate(user.likeDate)}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <FaHeart size={22} className="text-red-500 mx-2" />
          Liked your profile
        </div>
      </td>
    </tr>
  );
};

export default LikeTable;
