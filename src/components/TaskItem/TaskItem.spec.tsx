import "@vitest/browser/matchers.d.ts";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import TaskItem from "./TaskItem";

test("renders input with placeholder", async () => {
  const mockTask = {
    id: "1",
    description: "Task description",
    status: "pending",
    order: 0,
  } as Models.Task;
  const { getByTestId } = render(<TaskItem task={mockTask} />);
  await expect.element(getByTestId("task-item")).toBeInTheDocument();
});

test("renders task description", async () => {
  const description = "Test task description";
  const mockTask = {
    id: "1",
    description,
    status: "pending",
    order: 0,
  } as Models.Task;

  const { getByText } = render(<TaskItem task={mockTask} />);
  await expect.element(getByText(description)).toBeInTheDocument();
});

test("applies line-through style and light text color when checked is true", async () => {
  const mockTask = {
    id: "1",
    description: "Completed task",
    status: "completed",
    order: 0,
  } as Models.Task;
  const { getByText } = render(<TaskItem task={mockTask} />);
  const descriptionElement = getByText("Completed task");
  await expect
    .element(descriptionElement)
    .toHaveClass("line-through text-fe-text-light");
});

test("applies default text style when checked is false", async () => {
  const mockTask = {
    id: "1",
    description: "Pending task",
    status: "pending",
    order: 0,
  } as Models.Task;
  const { getByText } = render(<TaskItem task={mockTask} />);
  const descriptionElement = getByText("Pending task");
  await expect.element(descriptionElement).toHaveClass("text-fe-text-dark");
});

test("renders CheckSymbol when checked is true", async () => {
  const mockTask = {
    id: "1",
    description: "Completed task",
    status: "completed",
    order: 0,
  } as Models.Task;
  const { container } = render(<TaskItem task={mockTask} />);
  const icon = container.querySelector("svg");
  await expect.element(icon!).toBeInTheDocument();
});

test("renders a separator at the bottom", async () => {
  const mockTask = {
    id: "1",
    description: "Task with separator",
    status: "completed",
    order: 0,
  } as Models.Task;
  const { container } = render(<TaskItem task={mockTask} />);
  const separator = container.querySelector(".bg-fe-separator");
  await expect.element(separator!).toBeInTheDocument();
});
