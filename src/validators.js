import {
  HOURS_IN_DAY,
  MIDNIGHT_HOUR,
  PAGE_ACTIVITIES,
  PAGE_PROGRESS,
  PAGE_TIMELINE
} from '@/constants.js';

export const isPageValid = (currentPage) => {
  for (let page of [PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS]) {
    if (page === currentPage) {
      return true;
    }
  }

  return false;
};

export const isTimelineItemValid = ({ hour }) => {
  return typeof hour === 'number' && hour >= MIDNIGHT_HOUR && hour < HOURS_IN_DAY;
};

export const validateTimelineItems = (timelineItems) => {
  return timelineItems.every(isTimelineItemValid);
}

export const validateSelectOptions = (options) => {
  return options.every(isSelectOptionValid);
};

const isSelectOptionValid = ({value, label}) => {
  return typeof value === 'number' && typeof label === 'string';
}
