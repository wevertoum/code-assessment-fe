namespace Contexts {
  interface ManageDataContext {
    tasks: Task[];
    _postNewTask: (description: string) => Promise<void>;
    _patchTask: (id: string, status: "pending" | "completed") => Promise<void>;
  }
}
