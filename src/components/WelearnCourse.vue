<script setup lang="ts">
import { WeLearnFetch } from '@/models/welearn/query';
import useSWRV from 'swrv';

const props = defineProps<{
  courseId: number;
  courseName: string;
}>();

const { data: course } = useSWRV(
  `/welearn/course/${props.courseId}`,
  () => WeLearnFetch.course(props.courseId),
  {
    // cache: localStorageCache,
    dedupingInterval: 60 * 60 * 1000,
  },
);
</script>

<template>
  <span class="text-2xl">{{ props.courseName }}</span>
  <div class="w-full px-8 py-4 md:px-12">
    <div v-for="section in course" :key="section.id" class="py-1">
      <template v-if="section.modules.length !== 0">
        <div class="sticky top-0 rounded-md bg-neutral-focus px-2 text-xl">
          {{ section.name }}
        </div>
        <div
          v-for="sectionModule in section.modules"
          :key="sectionModule.id"
          class="px-4 py-1"
        >
          {{ sectionModule.name }}
        </div>
      </template>
    </div>
    <div class="h-16"></div>
  </div>
</template>
