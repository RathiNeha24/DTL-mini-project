import { render, screen } from "@testing-library/react";
import Home from "./pages/Home";

jest.mock(
  "react-router-dom",
  () => ({
    Link: ({ children, to, ...props }) => (
      <a href={to} {...props}>
        {children}
      </a>
    ),
    useLocation: () => ({ pathname: "/" }),
  }),
  { virtual: true }
);

test("renders the home hero content", () => {
  render(<Home />);
  expect(screen.getByText(/one polished place for/i)).toBeInTheDocument();
  expect(screen.getByText(/browse events/i)).toBeInTheDocument();
});
