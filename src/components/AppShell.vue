<script setup lang="ts">
import MenuBars from '../components/icons/MenuBars.vue';
</script>

<template>
  <div class="navbar bg-base-300 px-4">
    <div class="flex-none">
      <!-- Navigation Panel Toggler -->
      <button class="btn btn-ghost btn-square btn-sm lg:hidden">
        <label for="drawer-handle">
          <MenuBars />
        </label>
      </button>
    </div>
    <div class="flex-1">
      <slot name="header-main">
        <!-- Header Main Section -->
      </slot>
    </div>
    <div class="flex-none lg:px-4">
      <slot name="header-right">
        <!-- Header Right Section -->
      </slot>
    </div>
  </div>
  <div class="drawer-mobile drawer">
    <input id="drawer-handle" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center">
      <slot name="page-content">
        <!-- Page content here -->
      </slot>
    </div>
    <div class="drawer-side">
      <label for="drawer-handle" class="drawer-overlay"></label>
      <slot name="nav-panel">
        <!-- Navigation Panel Content -->
      </slot>
    </div>
  </div>
</template>
