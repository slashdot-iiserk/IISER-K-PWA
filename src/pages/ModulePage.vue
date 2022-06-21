<script setup lang="ts">
import AssignPage from '@/pages/AssignPage.vue';
const props = defineProps<{
  courseId: number;
  id: number;
  type: string;
}>();
</script>
<template>
  <template v-if="props.type === 'assign'">
    <AssignPage :course-id="props.courseId" :id="props.id" :key="props.id" />
  </template>
</template>
