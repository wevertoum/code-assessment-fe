import { vi, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import SortableTaskItem from "./SortableTaskItem";

test("renders task description correctly", async () => {
  const task = {
    id: "1",
    description: "Test task",
    status: "pending",
    order: 0,
  } as Models.Task;
  const { getByText } = render(
    <SortableTaskItem task={task} onChange={() => {}} />
  );
  await expect.element(getByText(task.description)).toBeInTheDocument();
});

test("triggers onChange when TaskItem checkbox is clicked", async () => {
  const onChangeMock = vi.fn();
  const task = {
    id: "2",
    description: "Checkbox task",
    status: "pending",
    order: 0,
  } as Models.Task;
  const { getByRole } = render(
    <SortableTaskItem task={task} onChange={onChangeMock} />
  );

  const checkbox = getByRole("checkbox");
  await checkbox.click();
  expect(onChangeMock).toHaveBeenCalledWith(true);
});

test("renders TaskItem as completed when status is 'completed'", async () => {
  const task = {
    id: "3",
    description: "Completed task",
    status: "completed",
    order: 0,
  } as Models.Task;
  const { getByRole } = render(
    <SortableTaskItem task={task} onChange={() => {}} />
  );

  const checkbox = getByRole("checkbox");
  await expect.element(checkbox).toBeChecked();
});

test("renders TaskItem as pending when status is 'pending'", async () => {
  const task = {
    id: "4",
    description: "Pending task",
    status: "pending",
    order: 0,
  } as Models.Task;
  const { getByRole } = render(
    <SortableTaskItem task={task} onChange={() => {}} />
  );

  const checkbox = getByRole("checkbox");
  await expect.element(checkbox).not.toBeChecked();
});

test("applies transform and transition styles correctly", async () => {
  const task = {
    id: "6",
    description: "Stylized task",
    status: "pending",
    order: 0,
  } as Models.Task;
  const { container } = render(
    <SortableTaskItem task={task} onChange={() => {}} />
  );

  const wrapperDiv = container.firstChild as HTMLElement;
  expect(wrapperDiv.style.transform).toBeDefined();
  expect(wrapperDiv.style.transition).toBeDefined();
});
