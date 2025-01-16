import { render } from "vitest-browser-react";
import { vi, test, expect } from "vitest";
import BoardSection from "./BoardSection";

vi.mock("../SortableTaskItem/SortableTaskItem", () => ({
  default: vi.fn(({ task }) => (
    <div data-testid={`task-${task.id}`}>{task.description}</div>
  )),
}));

test("renders the section title", async () => {
  const { getByText } = render(
    <BoardSection
      id="section-1"
      title="To Do"
      emptyLabel="No tasks here"
      tasks={[]}
    />
  );
  await expect.element(getByText("To Do")).toBeInTheDocument();
});

test("renders empty label when there are no tasks", async () => {
  const { getByText } = render(
    <BoardSection
      id="section-1"
      title="To Do"
      emptyLabel="No tasks here"
      tasks={[]}
    />
  );
  await expect.element(getByText("No tasks here")).toBeInTheDocument();
});

test("renders tasks when tasks are provided", async () => {
  const tasks = [
    { id: "1", description: "Task 1", status: "pending", order: 0 },
    { id: "2", description: "Task 2", status: "completed", order: 1 },
  ] as Models.Task[];

  const { getByTestId } = render(
    <BoardSection
      id="section-1"
      title="To Do"
      emptyLabel="No tasks here"
      tasks={tasks}
    />
  );

  for (const task of tasks) {
    await expect.element(getByTestId(`task-${task.id}`)).toBeInTheDocument();
  }
});

test("sets droppable ref on the container", async () => {
  const { container } = render(
    <BoardSection
      id="section-1"
      title="To Do"
      emptyLabel="No tasks here"
      tasks={[]}
    />
  );

  const droppableContainer = container.querySelector(
    "[data-droppable-id='section-1']"
  );
  expect(droppableContainer).toBeDefined();
});

test("renders a SortableContext with the correct props", async () => {
  const tasks = [
    {
      id: "1",
      description: "Task 1",
      status: "pending",
      order: 0,
    },
    {
      id: "2",
      description: "Task 2",
      status: "completed",
      order: 1,
    },
  ] as Models.Task[];

  const { container } = render(
    <BoardSection
      id="section-1"
      title="To Do"
      emptyLabel="No tasks here"
      tasks={tasks}
    />
  );

  const sortableContext = container.querySelector(
    "[data-context-id='section-1']"
  );
  expect(sortableContext).toBeDefined();
});
