<script setup>
import { defineAsyncComponent } from 'vue';
import { validateTimelineItems } from "@/validators.js";

defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator: validateTimelineItems,
  }
});

const TimelineItem = defineAsyncComponent(() => import('@/components/TimelineItem.vue'));
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimelineItem v-for="item in timelineItems" :key="item.hour" :timelineItem="item" />
    </ul>
  </div>
</template>
