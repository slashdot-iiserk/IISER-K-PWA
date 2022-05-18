WeLearnFetch
<script setup lang="ts">
import useSWRV from 'swrv';
import LocalStorageCache from 'swrv/dist/cache/adapters/localStorage';
import { WeLearnFetch } from '@/models/welearn/fetch';

const localStorageCache = new LocalStorageCache();
const { data: info, error: infoError } = useSWRV(
  '/welearn/info',
  WeLearnFetch.info,
  {
    cache: localStorageCache,
    dedupingInterval: 60 * 60 * 1000,
  },
);
const { data: courses } = useSWRV(
  '/welearn/courses',
  () => WeLearnFetch.courses(info.value?.userid),
  {
    cache: localStorageCache,
    dedupingInterval: 60 * 60 * 1000,
  },
);
</script>
<template>
  <div v-if="infoError">Some Error Occurred</div>
  <div v-if="!info">Loading</div>
  <div v-else class="w-full px-8 py-4 md:px-12">
    <div class="mb-4 text-center text-2xl">Welcome {{ info.firstname }}</div>
    <div v-if="courses" class="grid gap-4 grid-cols-auto-64">
      <div
        v-for="course in courses"
        :key="course.id"
        class="card card-bordered card-compact border-base-content"
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
