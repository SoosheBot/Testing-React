import React from 'react';
import { render, fireEvent, wait } from "@testing-library/react";
import StarWarsCharacters from './StarWarsCharacters';
import { getData as mockGetData } from '../api';

// jest.mock('../api');

test('renders page', async () => {
    render(<StarWarsCharacters />)
});

test('checks for next button', () => {
    const { getByText } = render(<StarWarsCharacters />);
    getByText(/next/i);
});

test('next button goes to next page on click', () => {
    const { getByText } = render(<StarWarsCharacters />);
    const nextButton = getByText(/next/i);
    fireEvent.click(nextButton);
})

// test('', () => {

// });
    // mockGetData.mockResolvedValue
