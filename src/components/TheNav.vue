<script setup>
import NavItem from '@/components/NavItem.vue';
import { navItems } from '@/constants';
import { isPageValid } from '@/validators.js';

defineProps({
  currentPage: {
    required: true,
    type: String,
    validator: isPageValid
  }
});

const emit = defineEmits({
  navigate: isPageValid
});
</script>

<template>
  <nav class="sticky bottom-0 z-10 bg-white text-3xl">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="{ name, icon, id } in navItems"
        @click="emit('navigate', name)"
        :class="{ 'pointer-events-none bg-gray-200': currentPage === name }"
        :key="id"
        :href="`#${name}`"
      >
        <component :is="icon" class="h-6 w-6" />
        <span>{{ name }}</span>
      </NavItem>
    </ul>
  </nav>
</template>
