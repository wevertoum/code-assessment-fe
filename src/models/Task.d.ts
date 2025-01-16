namespace Models {
  interface Task {
    id: string;
    order: number;
    description: string;
    status: TaskStatus;
  }
  type TaskStatus = "pending" | "completed";
}
