<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { WeLearnClient } from '@/models/welearn/client';
import { useAuthStore } from '@/stores/auth';

import WelearnLogin from '@/components/WelearnLogin.vue';
import WelearnContent from '@/components/WelearnContent.vue';

const { isLoggedIn } = storeToRefs(useAuthStore());
const login = async (username: string, password: string) => {
  isLoggedIn.value = await WeLearnClient.login(username, password);
};
</script>

<template>
  <template v-if="isLoggedIn">
    <WelearnContent />
  </template>
  <template v-else>
    <WelearnLogin @login="login" />
  </template>
</template>
