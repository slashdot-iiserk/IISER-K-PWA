<script setup lang="ts">
import router from '@/router';

const props = defineProps<{
  courseId: number;
  courseModule: any;
}>();
// const clickHandler = (modname: string, url: string) => {
const clickHandler = (courseModule: any) => {
  switch (courseModule.modname) {
    case 'url':
    case 'resource':
      window.open(courseModule.url);
      break;
    default:
      router.push({
        name: 'welearn.module',
        params: {
          courseId: props.courseId,
          id: courseModule.instance,
          type: courseModule.modname,
        },
      });
      break;
  }
};
</script>
<template>
  <div
    class="cursor-pointer rounded-md border border-neutral-focus p-2 hover:border-secondary"
    @click="clickHandler(props.courseModule)"
  >
    <div
      class="mb-2 flex items-center gap-2"
      v-if="props.courseModule.modname !== 'label'"
    >
      <img
        class="h-8 w-8 flex-shrink-0 rounded-full"
        :src="props.courseModule.modicon"
      />
      <div class="truncate text-lg">
        {{ props.courseModule.name }}
      </div>
    </div>
    <div
      :data-isCompact="props.courseModule.isCompact"
      v-html="props.courseModule.description"
    ></div>
  </div>
</template>

<style>
div[data-isCompact='false'] .no-overflow {
  /* Same as: '@apply truncate' */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  hyphens: auto;
}
</style>
