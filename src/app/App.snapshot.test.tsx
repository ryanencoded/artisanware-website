// App.snapshot.test.tsx
import { act } from "@testing-library/react";
import App from "./App";
import { renderWithRouter, setupPrelineMock } from "../common/utils/testUtils";

// Set up the mock before each test
setupPrelineMock();

test('renders App component snapshot', async () => {
  // Optional: Set up specific mocks or fetch responses as needed

  await act(async () => {
    const { asFragment } = renderWithRouter(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});