import "@vitest/browser/matchers.d.ts";
import { vi, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "@vitest/browser/context";
import InputCustom from "./InputCustom";

test("renders input with placeholder", async () => {
  const { getByTestId } = render(
    <InputCustom placeholder="Type something..." onEnter={() => {}} />
  );
  await expect.element(getByTestId("custom-input")).toBeInTheDocument();
});

test("calls onEnter with input value when Enter key is pressed", async () => {
  const onEnterMock = vi.fn();
  const { getByTestId } = render(
    <InputCustom placeholder="Type something..." onEnter={onEnterMock} />
  );
  const input = getByTestId("custom-input");
  await input.fill("Test Value");
  await expect.element(input).toHaveValue("Test Value");
  await userEvent.keyboard("{Enter}");
  expect(onEnterMock).toHaveBeenCalledWith("Test Value");
});
