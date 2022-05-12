<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue';
import InfoIcon from './icons/InfoIcon.vue';

const intervalMS = 60 * 1000;

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
  onRegistered(r) {
    r &&
      setInterval(() => {
        r.update();
      }, intervalMS);
  },
});
const close = async () => {
  offlineReady.value = false;
  needRefresh.value = false;
};
</script>

<template>
  <div>
    <div
      v-if="offlineReady || needRefresh"
      class="alert fixed left-1/2 bottom-4 z-10 w-1/2 min-w-fit -translate-x-1/2 bg-opacity-40 shadow-lg"
      role="alert"
    >
      <div>
        <InfoIcon />
        <span v-if="offlineReady">App up-to-date.</span>
        <span v-else>New update available.</span>
      </div>
      <div class="flex-none">
        <button
          v-if="needRefresh"
          @click="updateServiceWorker()"
          class="btn btn-info btn-xs sm:btn-sm"
        >
          Update
        </button>
        <button @click="close" class="btn btn-ghost btn-xs sm:btn-sm">
          Later
        </button>
      </div>
    </div>
  </div>
</template>
