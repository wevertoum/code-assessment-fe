import { createContext, useCallback, useEffect, useState } from "react";
import { useGetTasks, usePatchTask, usePostNewTask } from "../services/tasks";

const ManageDataContext = createContext({} as Contexts.ManageDataContext);

interface Props {
  children: React.ReactNode;
}

export function ManageDataContextProvider({ children }: Props) {
  const getTasks = useGetTasks();
  const postNewTask = usePostNewTask();
  const patchTask = usePatchTask();
  const [tasks, setTasks] = useState<Models.Task[]>([]);

  useEffect(() => {
    getTasks().then((tasks) => {
      setTasks(tasks);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _postNewTask = useCallback(
    async (description: string): Promise<void> => {
      await postNewTask(description).then((tasks) => {
        setTasks(tasks);
      });
    },
    [postNewTask]
  );

  const _patchTask = useCallback(
    async (id: string, status: "pending" | "completed"): Promise<void> => {
      await patchTask(id, status).then((tasks) => {
        setTasks(tasks);
      });
    },
    [patchTask]
  );

  return (
    <ManageDataContext.Provider
      value={{
        tasks,
        _postNewTask,
        _patchTask,
      }}
    >
      {children}
    </ManageDataContext.Provider>
  );
}

export default ManageDataContext;
