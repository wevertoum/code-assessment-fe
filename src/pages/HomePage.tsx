import React from "react";
import { useNavigate } from "react-router";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/todo-list");
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <p className="text-2xl text-gray-900 mb-4">Welcome to to-do system</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Go to Todo Page
      </button>
    </div>
  );
};

export default HomePage;
