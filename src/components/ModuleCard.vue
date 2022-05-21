<script setup lang="ts">
const props = defineProps<{
  courseModule: any;
}>();
</script>
<template>
  <div
    class="cursor-pointer rounded-md border border-neutral-focus p-2 hover:border-secondary"
  >
    <div class="flex items-center gap-2">
      <img
        class="h-8 w-8 flex-shrink-0 rounded-full"
        :src="props.courseModule.modicon"
      />
      <div class="no-overflow cursor-pointer text-lg">
        {{ props.courseModule.name }}
      </div>
    </div>
    <div v-html="props.courseModule.description"></div>
  </div>
</template>

<style>
.no-overflow {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  hyphens: auto;
}
</style>
