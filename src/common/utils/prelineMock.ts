// utils/prelineMock.ts
import "../../globals";
import { IStaticMethods } from "preline/preline";

type MockIStaticMethods = {
  [K in keyof IStaticMethods]: jest.Mock;
};

export const mockIStaticMethods: MockIStaticMethods = {
  autoInit: jest.fn(),
  getClassProperty: jest.fn(),
  afterTransition: jest.fn(),
};

export const setupPrelineMock = () => {
  jest.mock("preline/preline", () => ({
    IStaticMethods: mockIStaticMethods,
  }));

  // Mock the window.HSStaticMethods object
  beforeEach(() => {
    window.HSStaticMethods = {
      autoInit: mockIStaticMethods.autoInit,
      getClassProperty: mockIStaticMethods.getClassProperty,
      afterTransition: mockIStaticMethods.afterTransition
      // Add other properties as needed
    };
  });
};

// Ensure that all properties of IStaticMethods are mocked
test("all properties of IStaticMethods are mocked", () => {
  const mock: MockIStaticMethods = mockIStaticMethods;

  // Use Object.entries to get both key and value types
  Object.entries(mock).forEach(([_key, value]) => {
    // Assert that each property is a Jest mock function
    expect(value).toHaveBeenCalled();
  });
});