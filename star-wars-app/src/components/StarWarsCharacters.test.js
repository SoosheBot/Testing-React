import React from 'react';
import { render, fireEvent, wait } from "@testing-library/react";
import StarWarsCharacters from './StarWarsCharacters';
import { getData as mockGetData } from '../api';

jest.mock('../api');

test('renders star wars characters', async () => {
    mockGetData.mockResolvedValue
    render(<StarWarsCharacters />);
});

