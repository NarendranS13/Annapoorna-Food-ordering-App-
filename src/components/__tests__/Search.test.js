import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../Mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
// Mock function to handle fetch function in Body Component

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should Search res List for pizza text input",async()=>{
    await act(async () => render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>
    ));
    
    // First we should ensure we are getting 9 Res cards from Swiggy API
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(9);
    
    // Checking the Search Button and Input Functionality
    const searchBtn = screen.getByRole("button", {name: "Search"});
    const searchInput = screen.getByTestId("searchInput");
    // console.log(searchInput);
    // console.log(searchBtn);
    fireEvent.change(searchInput,{target: {value:"pizza"}});
    fireEvent.click(searchBtn);
    // Screen should load 2 cards
    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(2);
    // expect(searchBtn).toBeInTheDocument();
});



it("Should filter Top rated Restaurant",async()=>{
    await act(async () => render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>
    ));

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(9);

    const topRatedBtn = screen.getByRole("button", {name: "Top rated Restaurant"});
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(4);
    

});