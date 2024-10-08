import React, { useState, useEffect } from "react";

const UserFunction = () => {
  const [userInfo, setUserInfo] = useState({
    login: "",
    id: "",
    avatar_url: "https://avatars.githubusercontent.com/u/23637926?v=4",
    name: "Pratik",
    location: "Pune",
    company: null,
    blog: "",
    public_repos: 0,
    followers: 0,
    following: 0
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/pratikdhame");
        const json = await response.json();
        setUserInfo(json);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const { login, avatar_url, name, location, company, blog, public_repos, followers, following } = userInfo;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="flex justify-end px-4 pt-4">
          <button 
            id="dropdownButton" 
            data-dropdown-toggle="dropdown" 
            className="inline-block text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5" 
            type="button"
          >
            <span className="sr-only">Open dropdown</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
          </button>
          <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Export Data</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Delete</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center pb-10">
          <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={avatar_url} alt="User avatar" />
          <h5 className="mb-1 text-xl font-medium text-gray-900">{name}</h5>
          <span className="text-sm text-gray-500">{location}</span>
          <p className="text-sm text-gray-500">{company || "Not specified"}</p>
          <a href={blog} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{blog}</a>
          <div className="flex mt-4 space-x-2">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Follow</a>
            <a href={`https://github.com/${login}`} target="_blank" rel="noopener noreferrer" className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100">View Profile</a>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <p>Public Repos: {public_repos}</p>
            <p>Followers: {followers}</p>
            <p>Following: {following}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFunction;
