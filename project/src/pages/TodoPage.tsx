import React from "react";
import CheckCircle from "../components/icons/CheckCircle";
import InputCustom from "../components/InputCustom/InputCustom";
import TaskItem from "../components/TaskItem/TaskItem";

const TodoPage: React.FC = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <article
        className="
          bg-gray-100 w-full h-full rounded-none md:rounded-[20px] 
          md:w-4/5 md:h-4/5 2xl:w-3/5 
          shadow-[0px_2px_20px_0px_rgba(0,0,0,0.1)] flex flex-col
        "
      >
        <header className="bg-fe-header-blue h-24 rounded-none md:rounded-t-[20px] flex items-center justify-center">
          <div className="flex gap-[15px] h-9 w-full m-[30px]">
            <CheckCircle width={36} />
            <h2 className="text-fe-text-dark font-bold text-2xl">TODO List</h2>
          </div>
        </header>
        <main className="bg-white flex-grow rounded-none md:rounded-b-[20px] w-full p-[30px]">
          <div className="w-full h-full">
            <InputCustom
              placeholder="+ Adicione uma tarefa a lista. Pressione Enter para salvar."
              onEnter={(value) => console.log(value)}
            />
            <div className="mt-[30px]">
              <div className="flex flex-col">
                <div className="h-[45px] flex items-center">
                  <small className="text-fe-text-light font-bold text-xs">
                    Para fazer
                  </small>
                </div>
                <TaskItem
                  checked={false}
                  description="Nome da tarefa que está por fazer"
                  onChange={(checked) => console.log(checked)}
                />
                <TaskItem
                  checked={false}
                  description="Segunda tarefa por fazer"
                  onChange={(checked) => console.log(checked)}
                />
              </div>

              <div>
                <div className="h-[45px] flex items-center">
                  <small className="text-fe-text-light font-bold text-xs">
                    Concluído
                  </small>
                </div>
                <TaskItem
                  checked={true}
                  description="Exemplo de tarefa"
                  onChange={(checked) => console.log(checked)}
                />
                <TaskItem
                  checked={true}
                  description="Segundo exemplo aleatório de nome de tarefa"
                  onChange={(checked) => console.log(checked)}
                />
                <TaskItem
                  checked={true}
                  description="Mais um exemplo de tarefa finalizada"
                  onChange={(checked) => console.log(checked)}
                />
              </div>
            </div>
          </div>
        </main>
      </article>
    </div>
  );
};

export default TodoPage;
