<script setup>
import TheHeader from '@/components/TheHeader.vue';
import TheNav from '@/components/TheNav.vue';
import { defineAsyncComponent, ref } from 'vue';
import { generateTimelineItems, normalizePageHash } from './helpers';
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants';

const TheTimeline = defineAsyncComponent(() => import('@/pages/TheTimeline.vue'));
const TheActivities = defineAsyncComponent(() => import('@/pages/TheActivities.vue'));
const TheProgress = defineAsyncComponent(() => import('@/pages/TheProgress.vue'));

const currentPage = ref(normalizePageHash());
const timelineItems = generateTimelineItems();

const goTo = (page) => {
  currentPage.value = page;
};
</script>

<template>
  <TheHeader @navigate="goTo($event)" />

  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
