import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import breakpoints from '../../../../styles/breakpoints';
import data from './data';
import DocumentSuggestionCarousel from '../index';

describe('DocumentListCarousel component should', () => {
  const renderComponent = ({ subtitle, title }) => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <DocumentSuggestionCarousel
          items={data.suggestionItems}
          subtitle={subtitle}
          title={title}
        />
      </ThemeProvider>,
    )
  );

  it('render all text components', () => {
    renderComponent({
      subtitle: 'Based on your current favorites',
      title: 'Discover more favorites from the Test Kitchen',
    });
    expect(screen.getByText('Based on your current favorites'));
  });

  it('not render optional components', () => {
    renderComponent({ title: 'Discover more favorites from the Test Kitchen' });
    expect(screen.queryAllByText('Based on your current favorites').length).toBe(0);
  });
});
