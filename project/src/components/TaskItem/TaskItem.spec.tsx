import "@vitest/browser/matchers.d.ts";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import TaskItem from "./TaskItem";

test("renders input with placeholder", async () => {
  const { getByTestId } = render(<TaskItem />);
  await expect.element(getByTestId("task-item")).toBeInTheDocument();
});
