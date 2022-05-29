<script setup lang="ts">
import AssignPage from '@/components/AssignPage.vue';
const props = defineProps<{
  courseId: number;
  id: number;
  type: string;
}>();
</script>
<template>
  <template v-if="props.type === 'assign'">
    <AssignPage :course-id="props.courseId" :id="props.id" :type="props.type" />
  </template>
</template>
