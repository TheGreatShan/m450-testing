import Page from './page';
import Link from 'next/link'
import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'

test("Page component renders correctly", () => {
    expect(Page()).toStrictEqual(
        <div>
            <h1>Home</h1>
            <Link href="/about">About</Link>
        </div>
    )
})

import userEvent from '@testing-library/user-event';

test('renders Home heading and About link', () => {
    render(<Page/>);
    const heading = screen.getByText(/Home/i);
    const link = screen.getByRole('link', {name: /About/i});
    expect(heading).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/about');
    link.focus();
    expect(link).toHaveFocus();
    userEvent.click(link);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
});


import {MemoryRouter} from 'react-router-dom';

test('renders About page link with correct navigation', () => {
    render(
        <MemoryRouter>
            <Page/>
        </MemoryRouter>
    );
    const link = screen.getByRole('link', {name: /About/i});
    expect(link).toHaveAttribute('href', '/about');
    // Hier könnten Sie auch testen, was passiert, wenn der Link geklickt wird.

    userEvent.click(link);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
});