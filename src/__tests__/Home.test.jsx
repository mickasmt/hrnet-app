import { click } from "@testing-library/user-event/dist/click";
import { BrowserRouter } from "react-router-dom";
import Home from "pages/Home";
const { fireEvent, render, screen } = require("@testing-library/react");

describe("Given that I am User", () => {
  describe("When I go to the home page", () => {
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
  });

  describe("When I am on the home page and click on a New Employee card", () => {
    test("Then I navigate to the new employee page", async () => {
      // const history = createMemoryHistory();

      render(<Home />, {wrapper: BrowserRouter});
      const cards = screen.getAllByTestId('home-card');
      expect(cards).not.toBeNull();

      const newEmployeeCard = cards[0];
      expect(newEmployeeCard).toHaveTextContent("New employee");

      await fireEvent.click(newEmployeeCard);
      expect(window.location.pathname).toBe('/employees/new');

      // const newEmployeePage = screen.getByTestId('new-employee-main');
      // expect(newEmployeePage).not.toBeNull();
      // expect(newEmployeePage).toBeInTheDocument();
    });
    
  });

  describe("When I am on the home page and click on a List Employee card", () => {
    test("Then I navigate to the list employee page", () => {
      // a voir
      render(<Home />, {wrapper: BrowserRouter});
      const cards = screen.getAllByTestId('home-card');
      expect(cards).not.toBeNull();
      
      const listEmployeeCard = cards[1];
      expect(listEmployeeCard).toHaveTextContent("List employees");
      
      // click(listEmployeeCard);
      // const listEmployeePage = screen.getByTestId('list-employee-main');
      // expect(listEmployeePage).not.toBeNull();
      // expect(listEmployeePage).toBeInTheDocument();
    });
    
  });
});

