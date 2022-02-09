import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import PersonHeadShot from '../index';
import breakpoints from '../../../../../styles/breakpoints';

describe('PersonHeadShot component should', () => {
  const renderComponent = (props = {}) => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <PersonHeadShot
          {...props}
          imgAlt="test-head-shot"
          imgCloudinaryId="mise-play/Image_21_3x.png"
        />
      </ThemeProvider>,
    )
  );

  it('render an image', () => {
    renderComponent();
    expect(screen.getByAltText('test-head-shot'));
  });

  it('have default size of 10rem', () => {
    renderComponent();
    const headShot = screen.getByTestId('person-head-shot');
    expect(headShot).toHaveStyleRule('border-radius: 50%;');
    expect(headShot).toHaveStyleRule('height: 10rem;');
    expect(headShot).toHaveStyleRule('width: 10rem;');
  });

  it('set size based on size prop', () => {
    renderComponent({ size: { sm: '7.2' } });
    const headShot = screen.getByTestId('person-head-shot');
    expect(headShot).toHaveStyleRule('border-radius: 50%;');
    expect(headShot).toHaveStyleRule('height: 7.2rem;');
    expect(headShot).toHaveStyleRule('width: 7.2rem;');
  });
});
