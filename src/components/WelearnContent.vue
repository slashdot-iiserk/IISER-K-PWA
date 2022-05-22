WeLearnFetch
<script setup lang="ts">
import { WeLearnFetch } from '@/models/welearn/fetch';
import useCachedFetch from '@/hooks/cachedFetch';

const [info, infoError] = useCachedFetch('/welearn/info', WeLearnFetch.info);
const [courses] = useCachedFetch('/welearn/courses', () =>
  WeLearnFetch.courses(info.value?.userid),
);
</script>
<template>
  <div v-if="infoError">Some Error Occurred</div>
  <div v-if="!info">Loading</div>
  <div v-else class="w-full px-8 py-4 md:px-12">
    <div class="mb-4 text-center text-2xl">Welcome {{ info.firstname }}</div>
    <div v-if="!courses" class="text-center">Loading Courses</div>
    <div v-else class="grid grid-flow-row gap-4 grid-cols-auto-64">
      <div
        v-for="course in courses"
        :key="course.id"
        class="card card-bordered card-compact cursor-pointer border-base-content duration-300 ease-in-out hover:scale-105"
      >
        <div
          class="card-body"
          @click="
            $router.push({
              name: 'welearn.course',
              params: { courseName: course.shortname, courseId: course.id },
            })
          "
        >
          <div class="flex items-center justify-between">
            <h2 class="card-title">{{ course.shortname }}</h2>
            <span v-if="course.category" class="badge badge-secondary">
              Level {{ course.category }}
            </span>
          </div>
          <p class="text-lg">
            {{
              /* Remove 'MH1111: ' */
              course.fullname.replace(/\w+: /g, '')
            }}
          </p>
        </div>
      </div>
    </div>
    <div class="h-16"></div>
  </div>
</template>
