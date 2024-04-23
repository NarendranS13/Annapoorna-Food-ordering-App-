import { render, screen } from "@testing-library/react";
// import withPromotedLabel,{RestaurantCard} from "../RestaurantCard";
import RestaurantCard from "../RestaurantCard";
import { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../Mocks/resCardMock.json";
import "@testing-library/jest-dom";



it("Should render ResCard with Props Data",()=>{
    render(<RestaurantCard resData={MOCK_DATA} />)

    const name = screen.getByText("Chinese Wok");
    expect(name).toBeInTheDocument
    ();
});

const MockComponent = withPromotedLabel(RestaurantCard);
it("Should render ResCard Components with Mudichur Road highlight",()=>{
    render(<MockComponent resData={MOCK_DATA} />)

    const label = screen.getByText(/Mudichur/);
    expect(label).toBeInTheDocument();
});