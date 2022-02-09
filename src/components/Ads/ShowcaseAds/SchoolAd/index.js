import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import Gif from '../../../Gif';
import { getImageUrl, getGifSrcSet } from '../../../../lib/cloudinary';
import {
  color,
  font,
  fontSize,
  letterSpacing,
  lineHeight,
  spacing,
  withThemes,
} from '../../../../styles';

/**
 * Wrapper
 */
const SchoolTheme = {
  dark: css`
    background-color: ${color.mineShaft};
    position: relative;

    ${breakpoint('md')`
      align-items: center;
      display: flex;
    `}
  `,
};

const School = styled.article.attrs({
  className: 'school-ad',
})`${withThemes(SchoolTheme)}`;

const SchoolFigure = styled.figure.attrs({
  className: 'school-ad__figure',
})`
  margin: 0;
  position: relative;

  ${breakpoint('md')`
    flex: 0 0 34rem;
    height: 34rem;
    margin-bottom: 0;
    width: 34rem;

    img {
      height: 34rem;
      width: 34rem;
    }
  `}

  ${breakpoint('xlg')`
    flex: 0 0 56rem;
    height: 33rem;
    width: 56rem;

    img {
      height: 33rem;
      width: 56rem;
    }
  `}
`;

const AtkSchoolLogos = styled.img.attrs({
  className: 'school-ad__logos',
})`
  display: block;
  margin-bottom: ${spacing.sm};
  width: 20.5rem;
`;

/**
 * School info
 */
const SchoolInfoTheme = {
  default: css`
    align-items: center;
    display: flex;
    flex: 1 0 0;
    justify-content: center;
    padding: 2rem 2rem 3.8rem;

    ${breakpoint('md')`
      padding: 0;
    `}
  `,
};
const SchoolInfo = styled.div.attrs({
  className: 'school-ad__info',
})`${withThemes(SchoolInfoTheme)}`;

const SchoolInfoInner = styled.div`
  ${breakpoint('md', 'xlg')`
    padding: 0 ${spacing.sm};
  `}

  ${breakpoint('xlg')`
    width: 34.2rem;
  `}
`;

/**
 * School title
 */
const SchoolTitleTheme = {
  default: css`
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
    margin-bottom: ${spacing.sm};
  `,
  dark: css`
    color: ${color.white}
  `,
};
const SchoolTitle = styled.h3.attrs({
  className: 'school-ad__title',
})`${withThemes(SchoolTitleTheme)}`;

/**
 * School subtitle
 */
const SchoolSubtitleTheme = {
  default: css`
    font: ${fontSize.md}/2.3rem ${font.pnr};
    margin-bottom: ${spacing.sm};
  `,
  dark: css`
    color: ${color.whiteSmoke}
  `,
};

const SchoolSubtitle = styled.h4.attrs({
  className: 'school-ad__subtitle',
})`${withThemes(SchoolSubtitleTheme)}`;

/**
 * School cta button
 */
const SchoolCtaTheme = {
  default: css`
    color: ${color.white};
    background-color: ${color.coldPool};
    display: block;
    flex: 1 0 100%;
    font: ${fontSize.lg}/4rem ${font.pnb};
    letter-spacing: ${letterSpacing.cta};
    height: 4rem;
    margin-top: ${spacing.xsm};
    text-align: center;
    text-transform: uppercase;
    transition: 0.2s background-color ease-in-out;
    white-space: nowrap;
    width: 100%;

    @media(hover: hover) {
      &:hover {
        background-color: ${color.darkColdPool};
      }
    }

    ${breakpoint('md')`
      display: inline-block;
      margin: ${spacing.xsm} auto 0;
      width: 31.6rem;
    `}

    ${breakpoint('xlg')`
      width: 30.3rem;
    `}
  `,
};

const SchoolCta = styled.a.attrs({
  className: 'school-ad__cta',
})`${withThemes(SchoolCtaTheme)}`;

const deviceConfigMap = {
  desktop: 'showcaseSchoolAdDesktop',
  tablet: 'showcaseSchoolAdTablet',
  phone: 'showcaseSchoolAdMobile',
};

const deviceIdMap = {
  desktop: 'mise-play/school-showcase-desktop-3',
  tablet: 'mise-play/school-showcase-tablet-3',
  phone: 'mise-play/school-showcase-tablet-3',
};

const SchoolAd = ({
  cta,
  ctaHref,
  ctaTarget,
  deviceType,
  onClick,
  subtitle,
  title,
}) => (
  <School>
    <SchoolFigure>
      <Gif
        srcSet={getGifSrcSet(
          deviceIdMap[deviceType],
          deviceConfigMap[deviceType],
        )}
      />
    </SchoolFigure>
    <SchoolInfo>
      <SchoolInfoInner>
        <AtkSchoolLogos
          alt=""
          src={getImageUrl(
            'mise-play/atk-school-logo-lockup',
            'atkSchoolLogoLockup',
          )}
        />
        <SchoolTitle>
          {title}
        </SchoolTitle>
        <SchoolSubtitle>
          {subtitle}
        </SchoolSubtitle>
        <SchoolCta
          href={ctaHref}
          target={ctaTarget}
          onClick={onClick}
          title={cta}
        >
          {cta}
        </SchoolCta>
      </SchoolInfoInner>
    </SchoolInfo>
  </School>
);

SchoolAd.propTypes = {
  cta: PropTypes.string.isRequired,
  ctaHref: PropTypes.string.isRequired,
  ctaTarget: PropTypes.string,
  deviceType: PropTypes.oneOf(['desktop', 'phone', 'tablet']).isRequired,
  onClick: PropTypes.func,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

SchoolAd.defaultProps = {
  ctaTarget: null,
  onClick: null,
};

export default SchoolAd;
