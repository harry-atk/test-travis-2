import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { cards, color, fontSize, mixins, spacing, withThemes } from '../../../styles';
import ActionSummaryItem from '../../ActionSummaryItem';
import Attributions from '../shared/Attributions';
import Badge from '../../Badge';
import CtaLink from '../shared/CtaLink';
import FavoriteButton from '../shared/FavoriteButton';
import Image from '../shared/Image';
import ImageCollage from '../shared/ImageCollage';
import Sticker from '../shared/Sticker';
import Title from '../shared/Title';

const StandardCardTheme = {
  default: css`
    color: ${color.eclipse};

    // This hover state is necessary for a specificity issue related to SERP
    @media(hover: hover) {
      a.standard-card__anchor:hover {
        color: ${color.eclipse};
      }
    }

    .search-page & {
      a:focus-within p {
        ${mixins.focusIndicator()};
      }
    }
  `,
  dark: css`
    color: ${color.white};

    // This hover state is necessary for a specificity issue related to SERP
    @media(hover: hover) {
      a.standard-card__anchor:hover {
        color: ${color.white};
      }
    }
  `,
};

const RecipeAttribution = styled.div`
  color: ${color.eclipse};
  display: flex;
  margin: 0.3rem 0 0.6rem 0;

  .action-summary {
    color: ${color.eclipse};
  }

  .icon--star {
    margin-right: 1.6rem;
  }
`;

const StyledStandardCard = styled.article`
  ${withThemes(StandardCardTheme)}
  margin-bottom: ${spacing.xsm};
  position: relative;
  padding-bottom: ${spacing.sm};
  width: ${cards.standard.width.base};

  ${breakpoint('lg')`
    margin-bottom: ${spacing.sm};
    padding-bottom: ${spacing.sm};
    width: ${cards.standard.width.lg};
  `}
`;

const ImageWrapper = styled.div`
  background: ${color.white};
  position: relative;
  width: 100%;

  .no-image & {
    background: transparent;
    display: flex;
    align-items: center;
    margin-bottom: ${spacing.xxsm};
  }

  img {
    display: block;
    width: 100%;
  }
`;

const TitleWrapperTheme = {
  default: css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: ${spacing.xsm};
  `,
};

const TitleWrapper = styled.div`
  ${withThemes(TitleWrapperTheme)}
`;

export const StyledTitle = styled(Title)`
  font-size: ${fontSize.md};
  margin-bottom: ${spacing.xsm};

  .carousel & {
    font-size: ${fontSize.xl};
  }

  ${breakpoint('lg')`
    font-size: ${fontSize.xl};
  `}
`;

export const StyledFavoriteButton = styled(FavoriteButton)`
  flex-shrink: 0;
`;

export const StickerGroup = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;

  .no-image & {
    position: static;

    & > * {
      margin-bottom: 0;
    }
  }
`;

const StyledAttributions = styled(Attributions)`
  ${breakpoint('xs', 'lg')`
    font-size: 1.2rem;

    & > span {
      display: block;
    }

    .attributions__bullet {
      display: none;
    }
  `}
`;

const stickerHeightMobile = '1.2rem';
export const StyledSticker = styled(Sticker)`
  ${breakpoint('xs', 'lg')`
    border-radius: 0.5rem;
    line-height: ${stickerHeightMobile};
    height: ${stickerHeightMobile};
    font-size: ${fontSize.xxsm};

    &:not(:first-of-type) {
      display: none;
    }
  `}
`;

export const StyledBadge = styled(Badge)`
  position: absolute;
  top: ${spacing.xsm};
  left: ${spacing.xsm};

  .no-image & {
    position: relative;
    top: 0;
    left: 0;
  }

  ${breakpoint('xs', 'md')`
    width: 1.6rem;
    height: 1.6rem;
  `}
`;

function StandardCard({
  avgRating,
  className,
  contentType,
  contentTypeFormatted,
  ctaDataAttrs,
  ctaText,
  ctaUrl,
  dataAttrs,
  displayCookbook,
  displayRecipeAttribution,
  displaySecondaryAttribution,
  displayFavoritesButton,
  displayLockIcon,
  favoriteRibbonColor,
  stickers,
  imageAlt,
  imageUrl,
  isFavorited,
  numRatings,
  objectId,
  onClick,
  searchAttribution,
  searchComments,
  secondaryAttribution,
  shopPrices,
  siteKey,
  siteKeyFavorites,
  target,
  title,
  href,
}) {
  const ImageItem = Array.isArray(imageUrl) ? ImageCollage : Image;
  return (
    <StyledStandardCard
      className={`standard-card${imageUrl ? '' : ' no-image'}`}
      {...dataAttrs}
    >
      <>
        <ImageWrapper className="standard-card__image-wrapper">
          { imageUrl ? (
            <a
              tabIndex="-1"
              className="standard-card__anchor"
              href={href}
              onClick={onClick}
              rel={target && target === '_blank' ? 'noopener noreferrer' : null}
              target={target}
            >
              <ImageItem
                aria-hidden="true"
                imageAlt={imageAlt}
                imageUrl={imageUrl}
              />
            </a>
          ) : null }
          <StyledBadge
            className={className}
            type={siteKey}
          />
          { stickers ? (
            <StickerGroup>
              {stickers.map(({ text, type }) => (
                <StyledSticker
                  className={className}
                  key={text}
                  contentType={contentType}
                  type={type}
                  text={text}
                />
              ))}
            </StickerGroup>
          ) : null }
        </ImageWrapper>
        <TitleWrapper className="standard-card__title-wrapper">
          <a
            className="standard-card__anchor"
            href={href}
            onClick={onClick}
            rel={target && target === '_blank' ? 'noopener noreferrer' : null}
            target={target}
          >
            <StyledTitle className={className} title={title} />
          </a>
          { displayFavoritesButton ? (
            <StyledFavoriteButton
              className={className}
              fill={favoriteRibbonColor}
              role="button"
              isFavorited={isFavorited}
              objectId={objectId}
              siteKey={siteKeyFavorites}
              title={title}
            />
          ) : null }
        </TitleWrapper>
      </>
      {searchAttribution && (
        <RecipeAttribution
          // eslint-disable-next-line
          aria-label={`${avgRating > 0 ? `${avgRating} star${avgRating === 1 ? '' : 's'} ${numRatings} rating${numRatings === 1 ? '' : 's'}` : ''} ${searchComments ? `${searchComments} comment${searchComments === 1 ? '' : 's'}` : ''}`}
          aria-hidden={!avgRating && !searchComments}
          role="presentation"
          tabIndex={!avgRating && !searchComments ? '-1' : '0'}
        >
          {avgRating && displayRecipeAttribution && (
            <ThemeProvider theme={{ siteKey: 'atk' }}>
              <ActionSummaryItem icon="star">
                <div aria-hidden="true"><strong>{avgRating}</strong>&nbsp;<span>{`(${numRatings})`}</span></div>
              </ActionSummaryItem>
            </ThemeProvider>
          )}
          {searchComments && (
            <ThemeProvider theme={{ siteKey: 'atk' }}>
              <ActionSummaryItem icon="comment">
                <strong aria-hidden="true">{searchComments}</strong>
              </ActionSummaryItem>
            </ThemeProvider>
          )}
        </RecipeAttribution>
      )}
      <StyledAttributions
        displayCookbook={displayCookbook}
        displayLockIcon={displayLockIcon}
        displaySecondaryAttribution={displaySecondaryAttribution}
        primaryAttribution={contentTypeFormatted || contentType}
        secondaryAttribution={secondaryAttribution}
        shopPrices={shopPrices}
      />
      {
        ctaUrl && (
          <CtaLink
            ctaText={ctaText}
            ctaUrl={ctaUrl}
            dataAttrs={ctaDataAttrs}
            onClick={onClick}
          />
        )
      }
    </StyledStandardCard>
  );
}

StandardCard.propTypes = {
  avgRating: PropTypes.number,
  displayFavoritesButton: PropTypes.bool,
  className: PropTypes.string,
  contentType: PropTypes.string.isRequired,
  contentTypeFormatted: PropTypes.string,
  ctaDataAttrs: PropTypes.object,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.string,
  /** document data attributes */
  dataAttrs: PropTypes.object,
  displayCookbook: PropTypes.bool,
  displayRecipeAttribution: PropTypes.bool,
  displaySecondaryAttribution: PropTypes.bool,
  displayLockIcon: PropTypes.bool,
  favoriteRibbonColor: PropTypes.string,
  href: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  imageUrl: PropTypes.string,
  isFavorited: PropTypes.bool,
  numRatings: PropTypes.number,
  objectId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  searchAttribution: PropTypes.bool,
  searchComments: PropTypes.number,
  secondaryAttribution: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  shopPrices: PropTypes.object,
  siteKey: PropTypes.oneOf(['atk', 'cco', 'cio', 'kids', 'school', 'shop']).isRequired,
  siteKeyFavorites: PropTypes.oneOf(['atk', 'cco', 'cio']),
  stickers: PropTypes.array,
  target: PropTypes.string,
  title: PropTypes.string.isRequired,
};

StandardCard.defaultProps = {
  avgRating: null,
  className: null,
  contentTypeFormatted: null,
  ctaDataAttrs: null,
  ctaText: '',
  ctaUrl: '',
  dataAttrs: null,
  displayCookbook: false,
  displayRecipeAttribution: false,
  displaySecondaryAttribution: false,
  displayFavoritesButton: false,
  displayLockIcon: false,
  favoriteRibbonColor: color.eclipse,
  imageAlt: '',
  imageUrl: '',
  isFavorited: false,
  numRatings: null,
  onClick: null,
  searchComments: null,
  searchAttribution: false,
  secondaryAttribution: null,
  shopPrices: null,
  siteKeyFavorites: null,
  stickers: [],
  target: null,
};

export default React.memo(StandardCard, (prev, next) => (
  prev.objectId === next.objectId
  && prev.href === next.href
));
