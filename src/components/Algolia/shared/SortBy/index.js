import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connectSortBy } from 'react-instantsearch-dom';

import {
  color,
  font,
  fontSize,
  lineHeight,
  mixins,
  spacing,
  withThemes,
} from '../../../../styles';

const SearchSortByItemTheme = {
  default: css`
    align-items: center;
    display: flex;
    margin: ${spacing.xxsm} 0.25rem ${spacing.xsm} -${spacing.xxsm};
    padding-left: ${spacing.xxsm};

    &:focus-within {
      ${mixins.focusIndicator()};
      outline-offset: 0;
    }
  `,
  atk: css`
    &:hover {
      cursor: pointer;

      .search-sort-by__circle {
        background-color: ${color.mint};
      }

      .search-sort-by__label {
        color: ${color.mint};
      }
    }
  `,
  cco: css`
    &:hover {
      cursor: pointer;

      .search-sort-by__circle {
        background-color: ${color.denim};
      }

      .search-sort-by__label {
        color: ${color.denim};
      }
    }
  `,
  cio: css`
    &:hover {
      cursor: pointer;

      .search-sort-by__circle {
        background-color: ${color.squirrel};
      }

      .search-sort-by__label {
        color: ${color.squirrel};
      }
    }
  `,
  kidsSearch: css`
    margin-bottom: ${spacing.xsm};

    &:hover {
      .search-sort-by__label {
        color: ${color.black};
      }
    }
  `,
};

const SearchSortByItem = styled.div`
  ${withThemes(SearchSortByItemTheme)}
`;

const SearchSortByNew = styled.span`
  background-color: ${color.tomato};
  border-radius: 0.5rem;
  color: ${color.white};
  font: ${fontSize.xsm}/1.2rem ${font.pnb};
  letter-spacing: 1.25px;
  margin-left: ${spacing.xsm};
  padding: 2px 0px 1px 2px;
  text-align: center;
  text-transform: uppercase;
  width: 3.4rem;
`;

const SearchSortByRadioInputTheme = {
  default: css`
    position: absolute;
    opacity: 0;
  `,
  kidsSearch: css`
  `,
};

const SearchSortByRadioInput = styled.input`
  ${withThemes(SearchSortByRadioInputTheme)}
`;

const SearchSortByCircleTheme = {
  default: css`
    border-radius: 1.2rem;
    height: 1.2rem;
    margin-right: 0.6rem;
    width: 1.2rem;
  `,
  atk: css`
    border: solid 1px ${color.nobel};

    ${({ isRefined }) => (isRefined ? `
        background-color: ${color.mint};
    ` : `
        background-color: transparent;
    `)}
  `,
  cco: css`
    border: solid 1px ${color.black};

    ${({ isRefined }) => (isRefined ? `
        background-color: ${color.denim};
    ` : `
        background-color: transparent;
    `)}
  `,
  cio: css`
    border: solid 1px #D3C5A0;

    ${({ isRefined }) => (isRefined ? `
        background-color: ${color.squirrel};
    ` : `
        background-color: transparent;
    `)}
  `,
  kidsSearch: css`
    display: none;
  `,
};

const SearchSortByCircle = styled.div.attrs({
  className: 'search-sort-by__circle',
})`${withThemes(SearchSortByCircleTheme)}`;

const SearchSortByLabelTheme = {
  default: css`
    align-items: center;
    border: 1px dashed transparent;
    display: flex;
    font: ${fontSize.md}/1.38 ${font.pnr};
    font-size: ${fontSize.md};
    letter-spacing: normal;

    &:hover {
      cursor: pointer;
    }
  `,
  atk: css`
    color: ${color.eclipse};
  `,
  cco: css`
    color: ${color.black};
  `,
  cio: css`
    color: ${color.cork};
  `,
  kidsSearch: css`
    background-color: ${color.greySmoke};
    border: 2px solid transparent;
    border-radius: 1rem;
    color: ${color.black};
    display: block;
    left: 0;
    line-height: ${lineHeight.sm};
    text-align: left;
    padding: 0.4rem 1.3rem;
    width: 100%;

    .search-sort-by__label {
      color: ${color.black};
    }

    &:hover {
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    }

    ${({ isRefined }) => (isRefined ? `
      background-color: ${color.jade};
      color: ${color.white};
      font-family: ${font.pnb};

      &:hover {
        color: ${color.white};
      }
    ` : '')}

    &:focus-within {
      border: 2px solid ${color.jade};
    }
  `,
};

const SearchSortByLabel = styled.label.attrs({
  className: 'search-sort-by__label',
})`${withThemes(SearchSortByLabelTheme)}`;

export const CustomSortBy = ({ defaultRefinement, items, refine }) => (
  <>
    {
      items.map(({ isRefined, label, isNew, value }) => (
        <SearchSortByItem
          key={value}
        >
          <SearchSortByCircle
            data-testid="sort-by__radio"
            isRefined={isRefined}
          />
          <SearchSortByLabel
            htmlFor={value}
            isRefined={isRefined}
          >
            {label}
          </SearchSortByLabel>
          <SearchSortByRadioInput
            className={isRefined ? 'refined' : ''}
            defaultChecked={value.includes(defaultRefinement)}
            id={value}
            name="sortby"
            onClick={() => {
              refine(value);
            }}
            type="radio"
          />
          {isNew && <SearchSortByNew>New</SearchSortByNew>}
        </SearchSortByItem>
      ))
    }
  </>
);

CustomSortBy.propTypes = {
  defaultRefinement: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  refine: PropTypes.func.isRequired,
};

export default connectSortBy(CustomSortBy);
