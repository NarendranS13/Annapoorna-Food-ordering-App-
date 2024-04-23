import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("All the Contact Us Test cases", () => {
    it("Should load Contact Us component",() => {

        render(<Contact />);
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    
    it("Should load Button inside Contact Us component",() => {
    
        render(<Contact />);
        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit");
    
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    
    it("Should load Input name inside Contact Us component",() => {
    
        render(<Contact />);
        // const button = screen.getByRole("button");
        const inputName = screen.getByPlaceholderText("enter name");
    
        //Assertion
        expect(inputName).toBeInTheDocument();
    });
    
    
    it("Should load all input boxes inside the Contact Us component",() => {
    
        render(<Contact />);
        
        // Querying all of them 
        const inputBoxes = screen.getAllByRole("textbox");
        console.log(inputBoxes.length);
        //Assertion
        expect(inputBoxes.length).toBe(2);
    });
});
