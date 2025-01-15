import "./App.css";
import { useNavigate } from "react-router";

const App = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/todo-list");
  };

  return (
    <>
      <p className="text-2xl text-gray-900">Welcome to to-do system</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Go to Todo Page
      </button>
    </>
  );
};

export default App;
