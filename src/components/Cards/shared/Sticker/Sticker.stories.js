import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import Sticker from './index';

export default {
  title: 'Components/Cards/shared/Sticker',
  component: Sticker,
  decorators: [withKnobs],
};

export const Basic = () => (
  <Sticker
    contentType={select('Content type', {
      collection: 'collection',
      'cooking school course': 'cooking school course',
      episode: 'episode',
      video: 'video',
      none: null },
    'collection')}
    type="editorial"
    text={text('Basic sticker text', 'Editor’s pick')}
  />
);

export const Priority = () => (
  <Sticker
    type="priority"
    text={text('Priority sticker text', 'New')}
  />
);
