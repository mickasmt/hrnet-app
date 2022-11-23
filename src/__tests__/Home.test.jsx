import Home from "pages/Home";
import { BrowserRouter } from "react-router-dom";
const { render, screen } = require("@testing-library/react");

// describe("Given that I am User", () => {
//   describe("When I go to the home page", () => {
//   });
// });

test("Then It should render home page", () => {
  render(<Home />, {wrapper: BrowserRouter});
  const home = screen.getByTestId('home-main');
  expect(home).not.toBeNull();
  expect(home).toBeInTheDocument();
});

test("Then It should render 2 cards on home page", () => {
  render(<Home />, {wrapper: BrowserRouter});
  const cards = screen.getAllByTestId('home-card');
  expect(cards).not.toBeNull();
  expect(cards).toHaveLength(2);
});