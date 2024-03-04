import { ReactElement } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

interface RenderWithRouterOptions {
  route?: string;
}

export const renderWithRouter = (
  ui: ReactElement,
  { route = "/" }: RenderWithRouterOptions = {}
) => {
  window.history.pushState({}, "Test page", route);

  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
};

export default renderWithRouter;
