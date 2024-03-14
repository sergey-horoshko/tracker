import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline/index.js';

export const PAGE_TIMELINE = 'timeline';
export const PAGE_ACTIVITIES = 'activities';
export const PAGE_PROGRESS = 'progress';

export const MIDNIGHT_HOUR = 0;

export const navItems = [
  {
    id: 1,
    name: PAGE_TIMELINE,
    icon: ClockIcon
  },
  {
    id: 2,
    name: PAGE_ACTIVITIES,
    icon: ListBulletIcon
  },
  {
    id: 3,
    name: PAGE_PROGRESS,
    icon: ChartBarIcon
  }
];

export const HOURS_IN_DAY = 24;
