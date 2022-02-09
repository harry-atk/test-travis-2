import React from 'react';
import { boolean, withKnobs, select, text } from '@storybook/addon-knobs';

import AffiliateLink from './index';

export default {
  title: 'Components/Cards/shared/AffiliateLink',
  component: AffiliateLink,
  decorators: [withKnobs],
};

export const Default = () => (
  <AffiliateLink
    icon={select(
      'Icon',
      [
        'Amazon',
        'BlueApron',
        'Houzz',
        'KingArthur',
        'SurLaTable',
        'ThermoWorks',
        'Victorinox',
        'WilliamsSonoma',
      ],
      'Amazon')}
    text={text('Text', 'Buy now for $15')}
    title={text('Link Title', null)}
    url={text('URL', 'https://www.amazon.com')}
  />
);
