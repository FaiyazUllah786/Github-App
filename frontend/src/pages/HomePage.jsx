import React, { useState, useCallback, useEffect } from "react";
import toast from "react-hot-toast";

import Search from "../components/Search";
import SortRepos from "../components/SortRepos";
import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import Spinner from "../components/Spinner";

const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [sortType, setSortType] = useState("recent");

  const getUserProfileAndRepos = useCallback(
    async (username = "faiyazullah786") => {
      setLoading(true);
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userProfile = await userRes.json();
        setUserProfile(userProfile);

        const repoRes = await fetch(userProfile.repos_url);
        const repos = await repoRes.json();
        repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setRepos(repos);

        console.log("userProfile:", userProfile);
        console.log("repos:", repos);
        return { userProfile, repos };
      } catch (error) {
        toast.error(`something went Wrong`);
        setUserProfile(null);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);

  const onSearch = async (e, username) => {
    try {
      e.preventDefault();
      setLoading(true);
      setUserProfile(null);
      setRepos([]);

      const { userProfile, repos } = await getUserProfileAndRepos(username);
      setUserProfile(userProfile);
      setRepos(repos);
      setSortType("recent");
    } catch (error) {
      toast.error("Github profile not found!!");
    } finally {
      setLoading(false);
    }
  };

  const onSort = (sortType) => {
    if (sortType === "recent") {
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortType === "stars") {
      repos.sort(
        (a, b) => new Date(b.stargazers_count) - new Date(a.stargazers_count)
      );
    } else if (sortType === "forks") {
      repos.sort((a, b) => new Date(b.forks) - new Date(a.forks));
    }
    setSortType(sortType);
    setRepos([...repos]);
  };

  return (
    <>
      <div className="m-4">
        <Search onSearch={onSearch} />
        {repos.length > 0 && <SortRepos onSort={onSort} sortType={sortType} />}
        <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
          {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
          {!loading && <Repos repos={repos} />}
          {loading && <Spinner />}
        </div>
      </div>
    </>
  );
};

export default HomePage;
