import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color } from '../../../styles';

const RegistrantSubmit = styled.button.attrs({
  className: 'hero-hat__button',
})`
  background-color: ${color.frog};
  color: ${color.white};
  text-transform: uppercase;
  max-width: 25rem;

  &:hover {
    background-color: ${color.darkFrog};
  }

  ${breakpoint('md')`
    max-width: 28rem;
    min-width: 28rem;
  `}

  ${breakpoint('xlg')`
    margin-bottom: 2%;
    margin-right: 19%;
    max-width: 22.6rem;
    min-width: 22.6rem;

    .holiday-hat & {
      margin: auto 19% auto 4%;
    }
    .dollarOffer-hat & {
      min-width: 26.2rem;
      max-width: 26.2rem;
      padding: 0 1rem;
    }
  `}
`;

export default RegistrantSubmit;
