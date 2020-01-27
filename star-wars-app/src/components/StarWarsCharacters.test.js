import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import StarWarsCharacters from "./StarWarsCharacters";
import { getData as mockGetData } from "../api";

jest.mock('../api');


const fakeData = {
 previous: null,
 next: 'text',
 results: [{name:'Bob', url:'www.bob.com'}, {name:'2', url:'2'}, {name:'3', url:'3'}] 
};

// test('renders complete page with list of characters, previous button, and next button', () => {
//     render(<StarWarsCharacters />)
// });

// test('next button and previous button render, and fire on click', () => {
//     const { getByText } = render(<StarWarsCharacters />);
    
//     const nextButton = getByText(/next/i);
//     const previousButton = getByText(/previous/i);

//     fireEvent.click(nextButton);
//     fireEvent.click(previousButton);
// });

test('api works', async () => {
    mockGetData.mockResolvedValue(fakeData);
    const { getByText } = render(<StarWarsCharacters />);

    const nextButton = getByText(/next/i);

    fireEvent.click(nextButton);

    await wait(() => expect(getByText(/bob/i)));
    getByText('Bob')

    expect(mockGetData).toHaveBeenCalledTimes(1);
    expect(mockGetData).toHaveBeenCalledWith('https://swapi.co/api/people');


});
