<script setup lang="ts">
const props = defineProps<{
  id: number;
  type: string;
}>();
</script>
<template>
  <h1>{{ props.type }} {{ props.id }}</h1>
</template>
