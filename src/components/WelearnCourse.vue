<script setup lang="ts">
import { WeLearnFetch } from '@/models/welearn/fetch';
import useCachedFetch from '@/hooks/cachedFetch';
import ModuleCard from './ModuleCard.vue';

const props = defineProps<{
  courseId: number;
  courseName: string;
}>();

const [course] = useCachedFetch(`/welearn/course/${props.courseId}`, () =>
  WeLearnFetch.course(props.courseId),
);
</script>

<template>
  <span class="mt-4 text-2xl">{{ props.courseName }}</span>
  <div class="w-full px-8 md:px-12">
    <template v-for="section in course" :key="section.id">
      <div v-if="section.modules.length !== 0" class="my-6">
        <div
          class="sticky top-0 mb-2 rounded-md bg-neutral-focus px-2 py-1 text-xl font-bold"
        >
          {{ section.name }}
        </div>
        <div class="summary" v-html="section.summary"></div>
        <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
          <ModuleCard
            v-for="courseModule in section.modules"
            :key="courseModule.id"
            :course-module="courseModule"
          />
        </div>
      </div>
    </template>
    <div class="h-16"></div>
  </div>
</template>
<style>
.summary > p > iframe {
  width: 100%;
}
</style>
