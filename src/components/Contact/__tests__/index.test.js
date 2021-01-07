import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component',  () => {
    //baseline test
    it('renders', () => {
        render(<ContactForm />);
    });

    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm  />);
        
        expect(asFragment()).toMatchSnapshot();
    })
})

it('renders', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
  })

  it('renders', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('buttontag')).toHaveTextContent('Submit')
  })