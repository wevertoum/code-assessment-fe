import "@vitest/browser/matchers.d.ts";
import { vi, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import TaskItem from "./TaskItem";

test("renders input with placeholder", async () => {
  const { getByTestId } = render(
    <TaskItem
      checked={false}
      description="Task description"
      onChange={() => {}}
    />
  );
  await expect.element(getByTestId("task-item")).toBeInTheDocument();
});

test("renders task description", async () => {
  const description = "Test task description";
  const { getByText } = render(
    <TaskItem checked={false} description={description} onChange={() => {}} />
  );
  await expect.element(getByText(description)).toBeInTheDocument();
});

test("applies line-through style and light text color when checked is true", async () => {
  const { getByText } = render(
    <TaskItem checked={true} description="Completed task" onChange={() => {}} />
  );
  const descriptionElement = getByText("Completed task");
  await expect
    .element(descriptionElement)
    .toHaveClass("line-through text-fe-text-light");
});

test("applies default text style when checked is false", async () => {
  const { getByText } = render(
    <TaskItem checked={false} description="Pending task" onChange={() => {}} />
  );
  const descriptionElement = getByText("Pending task");
  await expect.element(descriptionElement).toHaveClass("text-fe-text-dark");
});

test("calls onChange with correct value when checkbox is clicked", async () => {
  const onChangeMock = vi.fn();
  const { getByRole } = render(
    <TaskItem
      checked={false}
      description="Task to be completed"
      onChange={onChangeMock}
    />
  );
  const checkbox = getByRole("checkbox");
  await checkbox.click();
  expect(onChangeMock).toHaveBeenCalledWith(true);
});

test("renders CheckSymbol when checked is true", async () => {
  const { container } = render(
    <TaskItem checked={true} description="Task with icon" onChange={() => {}} />
  );
  const icon = container.querySelector("svg");
  await expect.element(icon!).toBeInTheDocument();
});

test("renders a separator at the bottom", async () => {
  const { container } = render(
    <TaskItem
      checked={false}
      description="Task with separator"
      onChange={() => {}}
    />
  );
  const separator = container.querySelector(".bg-fe-separator");
  await expect.element(separator!).toBeInTheDocument();
});
