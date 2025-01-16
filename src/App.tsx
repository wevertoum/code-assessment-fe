import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import TodoPage from "./pages/TodoPage";
import HomePage from "./pages/HomePage";
import { ManageDataContextProvider } from "./contexts/ManageDataContext";

const App = () => {
  return (
    <ManageDataContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="todo-list" element={<TodoPage />} />
        </Routes>
      </BrowserRouter>
    </ManageDataContextProvider>
  );
};

export default App;
