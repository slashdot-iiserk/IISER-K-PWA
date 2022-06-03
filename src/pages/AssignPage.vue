<script setup lang="ts">
import { computed } from 'vue';
import useCachedFetch from '@/hooks/cachedFetch';
import { WeLearnFetch } from '@/models/welearn/fetch';
import { formattedDate, timePeriod } from '@/utils/datetime';

const props = defineProps<{
  courseId: number;
  id: number;
}>();

const [assignments] = useCachedFetch(
  `/welearn/course/${props.courseId}/assignments`,
  () => WeLearnFetch.assignments(props.courseId),
);
const assignment = computed(
  () => assignments.value?.filter((assign) => assign.id === props.id)[0],
);
const [submissionData] = useCachedFetch(`/welearn/submission/${props.id}`, () =>
  WeLearnFetch.submission(props.id),
);
const dueDate = computed(() => assignment.value?.duedate);
const lastModified = computed<number | undefined>(
  () => submissionData.value?.lastattempt?.submission?.timemodified,
);
const timeRemaining = computed(() => {
  if (!dueDate.value || !lastModified.value) return '';
  return timePeriod(lastModified.value, dueDate.value).toString();
});
</script>
<template>
  <template v-if="!assignment">Loading...</template>
  <div v-else>
    <h1 class="text-center">{{ assignment.name }}</h1>
    <div v-html="assignment.intro"></div>
    <div v-if="dueDate">Due Date: {{ formattedDate(dueDate) }}</div>
    <div v-if="lastModified">
      Last Modified:
      {{ formattedDate(lastModified) }}
    </div>
    <div>Time Remaining: {{ timeRemaining }}</div>
    <div class="h-16"></div>
  </div>
</template>
