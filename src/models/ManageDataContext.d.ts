namespace Contexts {
  interface ManageDataContext {
    tasks: Task[];
    _postNewTask: (description: string) => Promise<void>;
    _patchTask: (
      id: string,
      {
        status,
        description,
      }: {
        status?: Models.TaskStatus;
        description?: string;
      }
    ) => Promise<Models.Task[]>;
    _reorderTasks: (updatedTasks: Models.Task[]) => Promise<void>;
  }
}
