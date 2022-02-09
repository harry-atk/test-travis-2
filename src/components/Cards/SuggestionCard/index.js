import React from 'react';
import PropTypes from 'prop-types';

import LoadingSuggestionCard from './components/LoadingSuggestionCard';
import SuggestionCardAction from './components/SuggestionCardAction';
import SuggestionCardActions from './components/SuggestionCardActions';
import SuggestionCardBadge from './components/SuggestionCardBadge';
import SuggestionCardContent from './components/SuggestionCardContent';
import SuggestionCardContentInner from './components/SuggestionCardContentInner';
import SuggestionCardDek from './components/SuggestionCardDek';
import SuggestionCardImage from './components/SuggestionCardImage';
import SuggestionCardSubTitle from './components/SuggestionCardSubTitle';
import SuggestionCardTitle from './components/SuggestionCardTitle';
import SuggestionCardWrapper from './components/SuggestionCardWrapper';
import { FavoriteRibbon } from '../../DesignTokens/Icon';
import { Close } from '../../DesignTokens/Icon/svgs';
import { color } from '../../../styles';

const SuggestionCard = ({
  dek,
  href,
  imageUrl,
  objectId,
  siteKey,
  subtitle,
  title,
}) => (
  <SuggestionCardWrapper>
    <SuggestionCardImage
      data-testid={`suggestion-img-${Boolean(imageUrl)}`}
      href={href}
      imageUrl={imageUrl}
    >
      <SuggestionCardBadge
        type={siteKey}
      />
    </SuggestionCardImage>
    <SuggestionCardContent>
      <SuggestionCardContentInner>
        <SuggestionCardTitle
          data-testid="suggestion-title"
          href={href}
        >
          {title}
        </SuggestionCardTitle>
        {subtitle && (
          <SuggestionCardSubTitle
            data-testid="suggestion-sub-title"
          >
            {subtitle}
          </SuggestionCardSubTitle>
        )}
        {dek && (
          <SuggestionCardDek
            data-testid="suggestion-dek"
            dangerouslySetInnerHTML={{
              __html: dek,
            }}
          />
        )}
        <SuggestionCardActions>
          <SuggestionCardAction
            className="favorite-action remove-cell"
            data-event-name="RECOMMENDATION_ADDED"
            data-document-title={title}
            data-favoritable-id={objectId}
            data-object-id={objectId}
            data-origin-site={siteKey}
            data-testid="suggestion-action__favorite"
          >
            <FavoriteRibbon
              ariaHidden
              ariaLabel=" "
              className="favorite-ribbon"
              fill={color.white}
            />
            <span>I like it, save it</span>
          </SuggestionCardAction>
          <SuggestionCardAction
            className="skip remove-cell"
            data-document-title={title}
            data-event-name="RECOMMENDATION_REJECTED"
            data-href={href}
            data-object-id={objectId}
            data-testid="suggestion-action__skip"
          >
            <Close
              ariaHidden
              ariaLabel=" "
              fill={color.eclipse}
            />
            <span>Not for me</span>
          </SuggestionCardAction>
        </SuggestionCardActions>
      </SuggestionCardContentInner>
    </SuggestionCardContent>
  </SuggestionCardWrapper>
);

SuggestionCard.propTypes = {
  dek: PropTypes.string,
  href: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  objectId: PropTypes.string.isRequired,
  siteKey: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

SuggestionCard.defaultProps = {
  dek: null,
  imageUrl: null,
  subtitle: null,
};

SuggestionCard.Loading = LoadingSuggestionCard;

export default SuggestionCard;
