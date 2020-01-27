import React from 'react';
import { render, fireEvent, wait } from "@testing-library/react";
import StarWarsCharacters from './StarWarsCharacters';
import { getData as mockGetData } from '../api';

// jest.mock('../api');

test('renders page with characters, previous button, and next button', async () => {
    render(<StarWarsCharacters />)
});


test('next button and previous button render, and fire on click', () => {
    const { getByText } = render(<StarWarsCharacters />);
    const nextButton = getByText(/next/i);
    const previousButton = getByText(/previous/i);
    fireEvent.click(nextButton);
    fireEvent.click(previousButton);
})

// test('', () => {

// });
    // mockGetData.mockResolvedValue
