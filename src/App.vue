<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import AppShell from './components/AppShell.vue';
import MenuDots from './components/icons/MenuDots.vue';
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
        <ul class="menu w-max bg-base-300 p-4 text-lg">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/welearn">WeLearn</RouterLink></li>
          <li><RouterLink to="/mess">Mess</RouterLink></li>
        </ul>
      </template>
    </AppShell>
  </main>
</template>
