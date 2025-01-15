import React from "react";
import CheckCircle from "../components/icons/CheckCircle";

const TodoPage: React.FC = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <article
        className={`
          bg-gray-100 w-full h-full rounded-none md:rounded-[20px] 
          md:w-4/5 md:h-4/5 2xl:w-3/5 
          shadow-[0px_2px_20px_0px_rgba(0,0,0,0.1)] flex flex-col
        `}
      >
        <header className="bg-fe-header-blue h-24 rounded-none md:rounded-t-[20px] flex items-center justify-center">
          <div className="flex gap-[15px] h-9 w-full m-[30px]">
            <CheckCircle width={36} />
            <h2 className="text-fe-text-dark font-bold text-2xl">TODO List</h2>
          </div>
        </header>
        <main className="bg-white flex-grow rounded-none md:rounded-b-[20px]">
          <p className="text-blue-800">Body content goes here</p>
        </main>
      </article>
    </div>
  );
};

export default TodoPage;
