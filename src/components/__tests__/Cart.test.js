import { render,screen,fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../Mocks/mockResMenuData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
// MOCK API CALL FOR TEST
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () =>  Promise.resolve(MOCK_DATA)
    })
});

it("Should render the Restaurant Menu Component",async ()=>{
    await act(async() => render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    <RestaurantMenu />
    <Cart />
    </Provider>
    </BrowserRouter>
));

    // Checking the Accordian function
    const accordionHeader = screen.getByText("Kulfi(5)");
    fireEvent.click(accordionHeader);

    screen.getAllByTestId("fooditems");

    expect(screen.getAllByTestId("fooditems").length).toBe(5);

    // Check the functionality of Add button to cart items in Header
    // Before the cart item check our cart as 0 products
    expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
    // Check the cart after Add
    const addBtns = screen.getAllByRole("button",{name:"Add +"});
    // console.log(addBtns);
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

    // Check 2 products in cart
    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

    // Now need to check 2 product in the Cart page
    // Our cart page uses the same Itemlist which had data-testid
    expect(screen.getAllByTestId("fooditems").length).toBe(7);
    // Will fail due to following scenario 
    /**Our itemlist already have 5 items and we added the cart of 2 as same */

    // Clearing the button
    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));
    // Now check whether we have 5 products
    expect(screen.getAllByTestId("fooditems").length).toBe(5);

    // Also check the empty message
    expect(screen.getByText("Cart is empty please order your favorite")).toBeInTheDocument();
});