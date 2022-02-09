import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import {
  color,
  font,
  fontSize,
  lineHeight,
  spacing,
  withThemes,
} from '../../../styles';

import Button from '../../Buttons/Button';
import FormInput from '../shared/FormInput';

// eslint-disable-next-line no-useless-escape
const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function validateEmail(val) {
  return emailRe.test(val);
}

const EmailFormWrapperTheme = {
  default: css``,
};

const EmailFormWrapper = styled.div.attrs({
  className: 'email-form-wrapper',
})`${withThemes(EmailFormWrapperTheme)}`;

const EmailFormTheme = {
  default: css`
    display: flex;
    flex-direction: column;

    .form-input {
      margin-bottom: ${spacing.xsm};
    }

    button[type="submit"] {
      background-color: ${({ buttonColor }) => color[buttonColor]};
      border: none;
      color: ${({ buttonTextColor }) => color[buttonTextColor]};

      @media(hover: hover) {
        &:hover {
          background-color: ${({ buttonHoverColor }) => color[buttonHoverColor]};
          color: ${({ buttonHoverTextColor }) => color[buttonHoverTextColor]};
        }
      }
    }

    .form-error__inline {
      text-transform: uppercase;
    }

    ${breakpoint('md')`
      flex-direction: row;

      .form-input {
        flex: 4 0 auto;
        margin: 0;
      }

      button[type="submit"] {
        flex: 1 0 auto;
      }
    `}
  `,
};

const EmailFormElement = styled.form.attrs(({ disabled }) => ({
  className: `email-form${disabled ? ' disabled' : ''}`,
}))`${withThemes(EmailFormTheme)}`;

const HowWeUseLinkTheme = {
  default: css`
    color: ${color.silver};
    cursor: pointer;
    display: block;
    font: 1.2rem/2rem ${font.pnr};
    padding: 0.8rem 0;

    @media(hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }

    ${breakpoint('lg')`
      padding: 0.8rem 0 0;
    `}
  `,
};

const HowWeUseWrapper = styled.div`
  position: relative;

  ${breakpoint('md')`
    display: flex;
    justify-content: flex-end;
  `}
`;

const HowWeUseLink = styled.button.attrs({
  className: 'how-we-use__link',
})`${withThemes(HowWeUseLinkTheme)}`;

const HoweWeUseTextTheme = {
  default: css`
    display: ${({ isExpanded }) => (isExpanded ? 'block' : 'none')};
    color: ${color.eclipse};
    background-color: ${color.white};
    border: 1px solid ${color.shadyLady};
    font: ${fontSize.xsm}/${lineHeight.sm} ${font.pnr};
    padding: 1.1rem 1.5rem;
    position: absolute;
    top: 100%;
    width: 23rem;
    z-index: 1;
  `,
};

const HoweWeUseText = styled.div.attrs({
  className: 'how-we-use__text',
})`${withThemes(HoweWeUseTextTheme)}`;

const EmailForm = ({
  buttonColor,
  buttonHoverTextColor,
  buttonHoverColor,
  buttonTextColor,
  buttonText,
  errorText,
  formId,
  howWeUseText,
  inputId,
  inputLabel,
  instanceId,
  optionalIcon,
  placeholder,
  onSubmit,
}) => {
  const [showHow, setShowHow] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  const refocusInput = () => {
    const inputNode = document.getElementById(inputId);
    if (inputNode) {
      inputNode.focus();
    }
  };

  const handleSubmit = (evt) => {
    setDisabled(true);
    evt.preventDefault();
    const email = evt.currentTarget.elements.email.value;

    if (validateEmail(email)) {
      if (onSubmit) onSubmit(email);
    } else {
      setError(email.length === 0 ? 'Email is required' : errorText);
      setDisabled(false);
      refocusInput();
    }
  };
  const controlId = instanceId || inputLabel?.split(' ').join('') || 'email-form';
  return (
    <EmailFormWrapper
      data-testid="email-form-wrapper"
    >
      <EmailFormElement
        buttonColor={buttonColor}
        buttonHoverColor={buttonHoverColor}
        buttonHoverTextColor={buttonHoverTextColor}
        buttonTextColor={buttonTextColor}
        disabled={disabled}
        id={formId}
        onSubmit={handleSubmit}
      >
        <FormInput
          label={inputLabel}
          error={error}
          id={inputId}
          name="email"
          placeholder={placeholder}
          readOnly={disabled}
        />
        <Button
          data-testid="email-submit-button"
          disabled={disabled}
          role="button"
          type="submit"
        >
          {buttonText}{optionalIcon ? <span>{optionalIcon}</span> : null}
        </Button>
      </EmailFormElement>
      <HowWeUseWrapper>
        <HowWeUseLink
          aria-controls={`email-form__how--text-${controlId}`}
          aria-expanded={showHow}
          className="email-form__how"
          data-testid="email-form__how--link"
          href="#how-we-use-your-email"
          onClick={(evt) => {
            evt.preventDefault();
            setShowHow(curr => !curr);
          }}
        >
          {howWeUseText}
        </HowWeUseLink>
        <HoweWeUseText
          className="email-form__how-we-use-text"
          data-testid="email-form__how--text"
          isExpanded={showHow}
          id={`email-form__how--text-${controlId}`}
        >
          America&#39;s Test Kitchen will not sell, rent, or disclose your email
          address to third parties unless otherwise notified.
          Your email address is required to identify you for free access to
          content on the site. You will also receive free newsletters and
          notification of America&#39;s Test Kitchen specials.
        </HoweWeUseText>
      </HowWeUseWrapper>
    </EmailFormWrapper>
  );
};

EmailForm.propTypes = {
  buttonColor: PropTypes.string,
  buttonHoverColor: PropTypes.string,
  buttonHoverTextColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  buttonText: PropTypes.string,
  errorText: PropTypes.string,
  /** Id used to gather innerHTML for order flow prefill */
  formId: PropTypes.string,
  howWeUseText: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  inputLabel: PropTypes.string,
  instanceId: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  optionalIcon: PropTypes.string,
  placeholder: PropTypes.string,
};

EmailForm.defaultProps = {
  buttonColor: 'frog',
  buttonHoverColor: 'darkFrog',
  buttonHoverTextColor: 'white',
  buttonTextColor: 'white',
  buttonText: 'Sign me up',
  formId: 'email-form',
  errorText: 'Invalid email address',
  howWeUseText: 'How we use your email address',
  inputLabel: 'Email address',
  instanceId: null,
  optionalIcon: null,
  placeholder: 'Enter your email address',
};

export default EmailForm;
