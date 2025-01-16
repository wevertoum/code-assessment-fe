import { createContext, useCallback, useEffect, useState } from "react";
import {
  useGetTasks,
  usePatchTask,
  usePostNewTask,
  useReorderTasks,
} from "../services/tasks";
import FadeLoading from "../components/FadeLoading/FadeLoading";

const ManageDataContext = createContext({} as Contexts.ManageDataContext);

interface Props {
  children: React.ReactNode;
}

export function ManageDataContextProvider({ children }: Props) {
  const getTasks = useGetTasks();
  const postNewTask = usePostNewTask();
  const patchTask = usePatchTask();
  const reorderTasks = useReorderTasks();
  const [tasks, setTasks] = useState<Models.Task[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTasks().then((tasks) => {
      setTasks(tasks);
      setLoading(false);
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
    async (
      id: string,
      {
        status,
        description,
      }: {
        status?: Models.TaskStatus;
        description?: string;
      }
    ): Promise<Models.Task[]> => {
      return patchTask(id, {
        status,
        description,
      }).then((tasks) => {
        setTasks(tasks);
        return tasks;
      });
    },
    [patchTask]
  );

  const _reorderTasks = useCallback(
    async (updatedTasks: Models.Task[]): Promise<void> => {
      await reorderTasks(updatedTasks).then((tasks) => {
        setTasks(tasks);
      });
    },
    [reorderTasks]
  );

  return (
    <ManageDataContext.Provider
      value={{
        tasks,
        _postNewTask,
        _patchTask,
        _reorderTasks,
      }}
    >
      {loading && <FadeLoading loading />}
      {children}
    </ManageDataContext.Provider>
  );
}

export default ManageDataContext;
