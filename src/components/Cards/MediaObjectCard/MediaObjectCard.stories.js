import React from 'react';

import MediaObjectCard from './index';

export default {
  title: 'Components/Cards/MediaObjectCard',
  component: MediaObjectCard,
};

export const Default = () => (
  <MediaObjectCard
    ctaText="View full profile"
    ctaUrl="https://www.americastestkitchen.com"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid."
    personHeadShot={{
      imgCloudinaryId: 'mise-play/Image_21_3x.png',
    }}
    personName="Bridget Lancaster"
    personTitle="On-screen Instructor"
  />
);
