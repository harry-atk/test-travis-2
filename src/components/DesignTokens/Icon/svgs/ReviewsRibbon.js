import React from 'react';
import PropTypes from 'prop-types';
import { color } from '../../../../styles';

const ReviewsRibbon = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="reviews-ribbon"
    fill={fill}
    focusable="false"
    viewBox="0 0 14.77 18"
  >
    <path fill={fill} d="M14.32 14.85l-2.27-4.19a6.16 6.16 0 10-9.33 0L.45 14.85a.53.53 0 00.07.61.51.51 0 00.59.14l2.47-1 .67 2.55a.53.53 0 00.47.4.54.54 0 00.48-.31l2.08-4.47h.11l2.08 4.47a.54.54 0 00.48.31H10a.53.53 0 00.47-.4l.67-2.55 2.46 1a.53.53 0 00.67-.75zM7.38 1.58A5.08 5.08 0 112.3 6.66a5.09 5.09 0 015.08-5.08zM4.91 15.49l-.45-1.71a.53.53 0 00-.28-.34.52.52 0 00-.44 0l-1.65.65 1.43-2.63A6.15 6.15 0 006.2 12.7zM11 13.42a.52.52 0 00-.44 0 .53.53 0 00-.28.34l-.45 1.71-1.27-2.77a6.14 6.14 0 002.69-1.26l1.43 2.63z" />
    <path fill={fill} d="M6 7.4l-.64 1.92a.26.26 0 00.4.28l1.62-1.18L9 9.6a.25.25 0 00.39-.28L8.78 7.4l1.63-1.18a.25.25 0 00-.15-.46h-2l-.63-1.91a.26.26 0 00-.49 0l-.62 1.91h-2a.25.25 0 00-.15.46z" />
  </svg>
);

ReviewsRibbon.propTypes = {
  fill: PropTypes.string,
};

ReviewsRibbon.defaultProps = {
  fill: `${color.eclipse}`,
};

export default ReviewsRibbon;
