import { render } from "vitest-browser-react";
import { vi, test, expect } from "vitest";
import CheckboxWithLabel from "./CheckboxWithLabel";

test("renders the checkbox and label correctly", async () => {
  const { getByRole, getByText } = render(
    <CheckboxWithLabel
      checked={false}
      description="Test description"
      onCheck={() => {}}
      onRename={() => {}}
    />
  );

  const checkbox = getByRole("checkbox");
  const label = getByText("Test description");

  await expect.element(checkbox).toBeInTheDocument();
  await expect.element(label).toBeInTheDocument();
});

test("renders CheckSymbol when checked is true", () => {
  const { container } = render(
    <CheckboxWithLabel
      checked={true}
      description="Task with icon"
      onCheck={() => {}}
      onRename={() => {}}
    />
  );

  const checkSymbol = container.querySelector("svg");
  expect(checkSymbol).toBeInTheDocument();
});

test("calls onChange with true when checkbox is checked", async () => {
  const onChangeMock = vi.fn();
  const { getByRole } = render(
    <CheckboxWithLabel
      checked={false}
      description="Task to check"
      onCheck={onChangeMock}
      onRename={() => {}}
    />
  );

  const checkbox = getByRole("checkbox");
  await checkbox.click();

  expect(onChangeMock).toHaveBeenCalledWith(true);
});

test("calls onChange with false when checkbox is unchecked", async () => {
  const onChangeMock = vi.fn();
  const { getByRole } = render(
    <CheckboxWithLabel
      checked={true}
      description="Task to uncheck"
      onCheck={onChangeMock}
      onRename={() => {}}
    />
  );

  const checkbox = getByRole("checkbox");
  await checkbox.click();

  expect(onChangeMock).toHaveBeenCalledWith(false);
});
