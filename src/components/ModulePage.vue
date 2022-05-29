<script setup lang="ts">
const props = defineProps<{
  courseId: number;
  id: number;
  type: string;
}>();
</script>
<template>
  <h1>{{ props.type }} {{ props.id }}</h1>
</template>
