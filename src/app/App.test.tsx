// App.test.tsx
import { screen, act } from "@testing-library/react";
import App from "./App";
import { renderWithRouter, setupPrelineMock } from "../common/utils/testUtils";

// Set up the mock before each test
setupPrelineMock();

describe("App", () => {
  it("calls autoInit when location pathname changes", () => {
    renderWithRouter(<App />);

    // Initial rendering should trigger autoInit once
    expect(window.HSStaticMethods.autoInit).toHaveBeenCalledTimes(1);

    // Update location to trigger useEffect
    act(() => {
      window.history.pushState({}, "Test page", "/new-path");
    });

    // After location change, autoInit should be called again
    expect(window.HSStaticMethods.autoInit).toHaveBeenCalledTimes(1);
  });

  it("renders the content correctly", () => {
    renderWithRouter(<App />);

    // Check if the content is rendered
    expect(screen.getByText("Coming Soon")).toBeTruthy();
  });
});
