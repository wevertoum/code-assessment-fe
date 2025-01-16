import "@vitest/browser/matchers.d.ts";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import FadeLoading from "./FadeLoading";

test("renders FadeLoading when loading is true", async () => {
  const { getByTestId } = render(<FadeLoading loading={true} />);
  const loadingOverlay = getByTestId("fade-loading-overlay");
  await expect.element(loadingOverlay).toBeInTheDocument();
});

test("does not render FadeLoading when loading is false", async () => {
  const { getByTestId } = render(<FadeLoading loading={false} />);
  const loadingOverlay = getByTestId("fade-loading-overlay");
  await expect.element(loadingOverlay).not.toBeInTheDocument();
});
