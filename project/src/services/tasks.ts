import { useCallback } from "react";
import { generateUUID } from "../utils/generateUUID";

export function usePostNewTask() {
  return useCallback(async (description: string): Promise<Models.Task[]> => {
    return new Promise((resolve) => {
      const storedTasks = localStorage.getItem("tasks-endpoint");
      const tasksList = (
        storedTasks ? JSON.parse(storedTasks) : []
      ) as Models.Task[];

      const newTask: Models.Task = {
        id: generateUUID(),
        order: tasksList.length,
        description,
        status: "pending",
      };

      tasksList.push(newTask);
      localStorage.setItem("tasks-endpoint", JSON.stringify(tasksList));
      resolve(tasksList);
    });
  }, []);
}

export function useGetTasks() {
  return useCallback(async (): Promise<Models.Task[]> => {
    return new Promise((resolve) => {
      const storedTasks = localStorage.getItem("tasks-endpoint");
      const tasksList = storedTasks ? JSON.parse(storedTasks) : [];
      resolve(tasksList);
    });
  }, []);
}

export function usePatchTask() {
  return useCallback(
    async (
      id: string,
      status: "pending" | "completed"
    ): Promise<Models.Task[]> => {
      return new Promise((resolve) => {
        const storedTasks = localStorage.getItem("tasks-endpoint");
        const tasksList: Models.Task[] = storedTasks
          ? JSON.parse(storedTasks)
          : [];
        const taskIndex = tasksList.findIndex((task) => task.id === id);
        if (taskIndex === -1) return resolve(tasksList);
        tasksList[taskIndex].status = status;
        localStorage.setItem("tasks-endpoint", JSON.stringify(tasksList));
        resolve(tasksList);
      });
    },
    []
  );
}
