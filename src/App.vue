<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import AppShell from './components/AppShell.vue';
import MenuDots from './components/icons/MenuDots.vue';
import UpdatePrompt from './components/UpdatePrompt.vue';
</script>

<template>
  <main data-theme="night" class="h-screen overflow-y-hidden">
    <AppShell>
      <template v-slot:header-main>
        <a class="px-4 text-2xl normal-case">IISER K App</a>
      </template>
      <template v-slot:header-right>
        <button class="btn btn-ghost btn-circle btn-sm">
          <MenuDots />
        </button>
      </template>
      <template v-slot:page-content>
        <RouterView />
      </template>
      <template v-slot:nav-panel>
        <ul
          class="menu menu-compact w-max bg-base-300 p-4 text-lg md:menu-normal"
        >
          <li><RouterLink :to="{ name: 'home' }">Home</RouterLink></li>
          <li><RouterLink :to="{ name: 'welearn' }">WeLearn</RouterLink></li>
          <li><RouterLink :to="{ name: 'mess' }">Mess</RouterLink></li>
        </ul>
      </template>
    </AppShell>
  </main>
  <UpdatePrompt />
</template>
