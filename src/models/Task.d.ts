namespace Models {
  interface Task {
    id: string;
    order: number;
    description: string;
    status: "pending" | "completed";
  }
}
