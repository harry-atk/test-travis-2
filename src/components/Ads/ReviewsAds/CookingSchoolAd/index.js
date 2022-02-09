import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import {
  color,
  font,
  fontSize,
  letterSpacing,
  spacing,
  withThemes,
} from '../../../../styles';
import { getImageUrl } from '../../../../lib/cloudinary';

const AdDimensions = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${breakpoint('md')`
    align-items: center;
    flex-direction: row;
  `}

  ${breakpoint('lg')`
    &.cooking-school-ad__detail {
      justify-content: space-between;
    }
  `}

  ${breakpoint('xlg')`
    margin: auto;

    &.cooking-school-ad__detail {
      justify-content: unset;
    }
    
    &.cooking-school-ad__landing {
      width: 113.6rem;
    }
  `}
`;

const AdPicture = styled.picture`
  margin-right: 1.1rem;
  max-width: 10.2rem;
  min-height: 10.2rem;
  min-width: 10.2rem;

  ${breakpoint('md')`
    margin-right: 1.05rem;
    max-width: 10rem;
    min-height: 10rem;
    min-width: 10rem;
  `}

  ${breakpoint('xlg')`
    margin-right: 2.65rem;

    &.cooking-school-ad__detail {
      margin-right: 1rem;
    }
  `}

`;

const AdWrapperTheme = {
  default: css`
    padding: 1.9rem 1.9rem ${spacing.md} 1.8rem;

    @media print {
      display: none;
    }

    &.cooking-school-ad__detail {
      margin: 3.2rem -1.6rem;
      margin-bottom: 2.2rem;
      width: calc(100% + 3.2rem);
    }

    &.cooking-school-ad__landing {
      margin-bottom: ${spacing.xlg};
      width: 100%;
    }

    ${breakpoint('md')`
      align-items: center;
      flex-direction: row;
      padding: 2.2rem 3.6rem;
      text-align: left;
      
      &.cooking-school-ad__detail {
        margin: ${spacing.xlg} -3.6rem 0;
        width: calc(100% + 7.2rem);
      }

      &.cooking-school-ad__landing {
        margin-bottom: 3.4rem;
      }
    `}

    ${breakpoint('lg')`
      &.cooking-school-ad__detail {
        margin: ${spacing.xlg} 0 2.2rem;
        min-width: 66.7rem;
        padding: 2.2rem 3.6rem 2.2rem 2.3rem;
        width: 100%;
      }
    `}

    ${breakpoint('xlg')`
      &.cooking-school-ad__detail {
        margin: ${spacing.xlg} 0 0;
        max-height: 14.4rem;
        padding: 2.2rem 3.6rem;
        width: 84.8rem;
      }

      &.cooking-school-ad__landing {
        margin-bottom: 1.8rem;
      }
    `}
  `,
  atk: css`
    background-color: ${color.solitude};
  `,
  cco: css`
    background-color: ${color.aliceBlue};
  `,
  cio: css`
    background-color: ${color.ivory};
  `,
};

const AdWrapper = styled.div`
  ${withThemes(AdWrapperTheme)}
`;

const ContentWrapperTheme = {
  default: css`
    display: flex;
    flex-direction: column;

    .review-ad-trial-em {
      letter-spacing: 0.84px;
    }

    ${breakpoint('lg')`
      &.cooking-school-ad__detail {
        max-width: 26rem;
      }
    `}

    ${breakpoint('xlg')`
      max-width: 63.5rem;

      &.cooking-school-ad__detail {
        margin-right: 4.3rem;
        max-width: 41.9rem;
        min-width: 41.9rem;
      }
    `}
  `,
  cio: css`
    ${breakpoint('xlg')`
      &.cooking-school-ad__detail {
        margin-right: 2.4rem;
        max-width: 44.5rem;
        width: 44.5rem;
      }
    `}

  `,
};

const ContentWrapper = styled.div`
  ${withThemes(ContentWrapperTheme)}
`;

const CtaLinkTheme = {
  default: css`
    align-items: center;
    color: ${color.white};
    display: flex;
    font: ${fontSize.lg}/1.2rem ${font.pnb};
    justify-content: center;
    letter-spacing: ${letterSpacing.cta};
    min-height: ${spacing.xlg};
    text-transform: uppercase;

    ${breakpoint('md')`
      min-width: 19.7rem;
    `}

    ${breakpoint('lg')`
      min-width: 17.7rem;
      margin-left: 2.5rem;
    `}

    ${breakpoint('xlg')`
      margin-left: 0;
      margin-right: ${spacing.xlg};
      min-width: 19.7rem;
    `}
  `,
  atk: css`
    background-color: ${color.coldPool};

    &:hover {
      background-color: ${color.darkColdPool};
    }
  `,
  cco: css`
    background-color: ${color.denim};

    &:hover {
      background-color: ${color.arapawa};
    }
  `,
  cio: css`
    background-color: ${color.squirrel};

    &:hover {
      background-color: ${color.cork};
    }
  `,
};

const CtaLink = styled.div`
  ${withThemes(CtaLinkTheme)}
`;

const DescriptionTheme = {
  default: css`
    font: ${fontSize.lg}/2.1rem ${font.pnb};
    letter-spacing: normal;

    ${breakpoint('md')`
      font: 2.1rem/2.4rem ${font.pnb};
    `}

    ${breakpoint('xlg')`
      font: 2.1rem/2.6rem ${font.pnb};
    `}
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
};

const Description = styled.span`
  ${withThemes(DescriptionTheme)}
`;

const HeadlineTheme = {
  default: css`
    font: ${fontSize.sm}/1.6rem ${font.pnr};
    letter-spacing: 1.4px;
    margin-bottom: ${spacing.xsm};
    text-transform: uppercase;

    ${breakpoint('md')`
      font: ${fontSize.md}/2.6rem ${font.pnr};
      letter-spacing: ${letterSpacing.md};
      margin-bottom: ${spacing.xxsm};
      min-width: 31.7rem;
    `}

    ${breakpoint('xlg')`
      margin-top: ${spacing.xsm};
    `}
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
};

const Headline = styled.span`
  ${withThemes(HeadlineTheme)}
`;

const MainContent = styled.div`
  display: flex;
  margin-bottom: ${spacing.md};

  ${breakpoint('md')`
    margin-bottom: 0;
    margin-right: 4.6rem;
  `}

  ${breakpoint('xlg')`
    margin-right: 13rem;

    &.cooking-school-ad__detail {
      margin-right: 0;
    }
  `}
`;

const CookingSchoolAd = ({
  linkCta,
  cloudinaryId,
  description,
  deviceType,
  headline,
  href,
  identifier,
  mobileLinkCta,
  onClick,
}) => (
  <AdWrapper className={`cooking-school-ad__${identifier}`}>
    <AdDimensions
      className={`cooking-school-ad__${identifier}`}
      href={href}
      onClick={onClick}
    >
      <MainContent className={`cooking-school-ad__${identifier}`}>
        <AdPicture className={`cooking-school-ad__${identifier}`}>
          <source
            src={getImageUrl(cloudinaryId, { aspectRatio: '1:1', width: 500 })}
            media="(min-width: 768)"
          />
          <img
            alt=""
            className="cooking-school-ad__image"
            crossOrigin="anonymous"
            decoding="async"
            src={getImageUrl(cloudinaryId, { aspectRatio: '1:1', width: 400 })}
          />
        </AdPicture>
        <ContentWrapper className={`cooking-school-ad__${identifier}`}>
          <Headline>{headline}</Headline>
          <Description
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </ContentWrapper>
      </MainContent>
      <CtaLink className={`cooking-school-ad__${identifier}`}>
        {deviceType === 'mobile' ? mobileLinkCta : linkCta}
      </CtaLink>
    </AdDimensions>
  </AdWrapper>
);

CookingSchoolAd.propTypes = {
  cloudinaryId: PropTypes.string,
  description: PropTypes.string,
  deviceType: PropTypes.string.isRequired,
  headline: PropTypes.string,
  href: PropTypes.string.isRequired,
  identifier: PropTypes.oneOf(['landing', 'detail']).isRequired,
  linkCta: PropTypes.string,
  mobileLinkCta: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

CookingSchoolAd.defaultProps = {
  cloudinaryId: 'ATK Reviews Ads/CAN_CookingSchoolGeneralCandids-9031_3x.png',
  description: 'Take your skills to the next level with 320+ courses led by our expert test cooks.',
  headline: 'Try our online cooking school',
  linkCta: 'Try for Free',
  mobileLinkCta: 'Try Now',
};

export default CookingSchoolAd;
