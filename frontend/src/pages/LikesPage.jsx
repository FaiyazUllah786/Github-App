import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import LikeTable from "../components/LikeTable";

const LikesPage = () => {
  const [likes, setLikes] = useState([]);
  useEffect(() => {
    const getLike = async () => {
      try {
        const response = await fetch("/api/users/likes", {
          credentials: "include",
        });
        const data = await response.json();
        console.log(data);
        if (data.error) throw new Error(data.error);
        setLikes(data.likedBy);
      } catch (error) {
        toast.error("getLikes error" + error.message);
      }
    };
    getLike();
  }, []);
  console.log(likes);
  return (
    <div className=" relative overflow-x-auto shadow-md px-4">
      <table className=" w-full rounded-lg text-sm text-left rtl:text-right  overflow-hidden">
        <thead className="text-xs uppercase bg-glass ">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">No</div>
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {likes.map((user, idx) => (
            <LikeTable key={user._id} user={user} idx={idx} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default LikesPage;
